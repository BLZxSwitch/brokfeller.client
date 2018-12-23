import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ControlsConfig } from "../../shared/form/controls-config";
import { ITicketFormModel } from "../components/ticket-form/ticket-form-model";

@Injectable()
export class TicketEditFormProvider {

  constructor(private formBuilder: FormBuilder) {

  }

  public get(): FormGroup {
    const controlsConfig: ControlsConfig<ITicketFormModel> = {
      name: ["", [Validators.required]],
      sum: [undefined],
      email: [""],
      phone: [""],
      ticketStatusId: [""],
      comment: [""],
    };

    return this.formBuilder.group(controlsConfig);
  }
}
