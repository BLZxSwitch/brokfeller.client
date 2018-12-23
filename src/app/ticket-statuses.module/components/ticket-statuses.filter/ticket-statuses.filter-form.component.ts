import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs/index";
import { takeUntil } from "rxjs/operators";
import { AutoSubmitPipeBehavior } from "../../services/auto-submit.pipe-behavior";
import { TicketStatusesFilterFormProvider } from "../../services/ticket-statuses.filter-form.provider";
import { ITicketStatusesFilterFormModel } from "./ticket-statuses.filter-form.model";

@Component({
  selector: "pr-ticket-statuses-filter-form",
  styleUrls: ["./ticket-statuses.filter-form.component.scss"],
  templateUrl: "./ticket-statuses.filter-form.component.html"
})
export class TicketStatusesFilterFormComponent implements OnInit, OnDestroy {

  @Input()
  public set filter(filter: string) {
    this.form.setValue({filter});
  }

  @Output()
  public submitted = new EventEmitter<string>();

  public form: FormGroup;

  private ngUnsubscribe$ = new Subject();

  public static readonly formFilterProjector = (formValues: ITicketStatusesFilterFormModel) => formValues.filter;

  constructor(
    private ticketStatusesFilterFormProvider: TicketStatusesFilterFormProvider,
    private autoSubmitPipeBehavior: AutoSubmitPipeBehavior) {

    this.form = ticketStatusesFilterFormProvider.get();
  }

  public ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        this.autoSubmitPipeBehavior.get(TicketStatusesFilterFormComponent.formFilterProjector),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe((formValues: ITicketStatusesFilterFormModel) => this.submitted.emit(formValues.filter));
  }

  public ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
