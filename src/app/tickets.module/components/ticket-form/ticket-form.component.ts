import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NowProvider } from "../../../core/services/now.provider";
import { ITicketDTO } from "../../../core/services/service-proxies";
import { BasicFormComponent } from "../../../shared.module/base-components/basic-form-component";
import { TicketEditFormProvider } from "../../services/ticket.edit-form.provider";
import { ITicketFormModel } from "./ticket-form-model";

@Component({
  selector: "pr-ticket-edit",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketFormComponent extends BasicFormComponent {
  @Input() public type: string;

  @Input()
  public set ticket(ticket: ITicketDTO) {
    if (ticket === undefined) return;

    this._edited = ticket;
    const value: ITicketFormModel = {
      name: ticket.name,
      comment: ticket.comment,
      ticketStatusId: ticket.ticketStatusId,
      phone: ticket.phone,
      email: ticket.email,
      sum: ticket.sum,
    };
    this.form.setValue(value);
  }

  public form: FormGroup;

  private _edited: ITicketDTO;

  constructor(private formProvider: TicketEditFormProvider,
              private  nowProvider: NowProvider) {
    super();
    this.form = formProvider.get();
    this.transformFormData = data => this.getDtoFromForm(data);
  }

  public getDtoFromForm(data) {
      const model: ITicketDTO = {
        ...this._edited,
        name: data.name,
        sum: data.sum,
        email: data.email,
        phone: data.phone,
        ticketStatusId: data.ticketStatusId,
        comment: data.comment,
        creationDate: this.nowProvider.now().valueOf(),
      };

      return model;
  }
}
