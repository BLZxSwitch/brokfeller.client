import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs/index";
import { takeUntil } from "rxjs/operators";
import { AutoSubmitPipeBehavior } from "../../services/auto-submit.pipe-behavior";
import { TicketsFilterFormProvider } from "../../services/tickets.filter-form.provider";
import { ITicketsFilterFormModel } from "./tickets.filter-form.model";

@Component({
  selector: "pr-tickets-filter-form",
  styleUrls: ["./tickets.filter-form.component.scss"],
  templateUrl: "./tickets.filter-form.component.html"
})
export class TicketsFilterFormComponent implements OnInit, OnDestroy {

  @Input()
  public set filter(filter: string) {
    this.form.setValue({filter});
  }

  @Output()
  public submitted = new EventEmitter<string>();

  public form: FormGroup;

  private ngUnsubscribe$ = new Subject();

  public static readonly formFilterProjector = (formValues: ITicketsFilterFormModel) => formValues.filter;

  constructor(
    private ticketsFilterFormProvider: TicketsFilterFormProvider,
    private autoSubmitPipeBehavior: AutoSubmitPipeBehavior) {

    this.form = ticketsFilterFormProvider.get();
  }

  public ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        this.autoSubmitPipeBehavior.get(TicketsFilterFormComponent.formFilterProjector),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe((formValues: ITicketsFilterFormModel) => this.submitted.emit(formValues.filter));
  }

  public ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
