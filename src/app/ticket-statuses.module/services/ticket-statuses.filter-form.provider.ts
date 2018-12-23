import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ControlsConfig } from "../../shared/form/controls-config";
import { ITicketStatusesFilterFormModel } from "../components/ticket-statuses.filter/ticket-statuses.filter-form.model";

@Injectable()
export class TicketStatusesFilterFormProvider {

  constructor(private formBuilder: FormBuilder) {

  }

  public get(): FormGroup {
    const controlsConfig: ControlsConfig<ITicketStatusesFilterFormModel> = {
      filter: [0]
    };

    return this.formBuilder.group(controlsConfig);
  }
}
