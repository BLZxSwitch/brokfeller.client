import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ControlsConfig } from "../../shared/form/controls-config";
import { ITicketStatusFormModel } from "../components/ticket-status-form/ticket-status-form-model";

@Injectable()
export class DicketStatusEditFormProvider {

  constructor(private formBuilder: FormBuilder) {

  }

  public get(): FormGroup {
    const controlsConfig: ControlsConfig<ITicketStatusFormModel> = {
      name: ["", [Validators.required]]
    };

    return this.formBuilder.group(controlsConfig);
  }
}
