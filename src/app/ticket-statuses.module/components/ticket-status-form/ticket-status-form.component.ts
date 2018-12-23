import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ITicketStatusDTO } from "../../../core/services/service-proxies";
import { BasicFormComponent } from "../../../shared.module/base-components/basic-form-component";
import { DicketStatusEditFormProvider } from "../../services/dicket-status.edit-form.provider";
import { ITicketStatusFormModel } from "./ticket-status-form-model";

@Component({
  selector: "pr-ticket-status-edit",
  templateUrl: "./ticket-status-form.component.html",
  styleUrls: ["./ticket-status-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketStatusFormComponent extends BasicFormComponent {
  @Input() public type: string;

  @Input()
  public set ticketStatus(ticketStatus: ITicketStatusDTO) {
    if (ticketStatus === undefined) return;

    this._edited = ticketStatus;
    const value: ITicketStatusFormModel = {
      name: ticketStatus.name,
    };
    this.form.setValue(value);
  }

  public form: FormGroup;

  private _edited: ITicketStatusDTO;

  constructor(private formProvider: DicketStatusEditFormProvider) {
    super();
    this.form = formProvider.get();
    this.transformFormData = data => this.getDtoFromForm(data);
  }

  public getDtoFromForm(data) {
      const model: ITicketStatusDTO = {
        ...this._edited,
        name: data.name
      };

      return model;
  }
}
