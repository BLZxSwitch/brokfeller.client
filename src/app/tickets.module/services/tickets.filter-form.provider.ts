import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ControlsConfig } from "../../shared/form/controls-config";
import { ITicketsFilterFormModel } from "../components/tickets.filter/tickets.filter-form.model";

@Injectable()
export class TicketsFilterFormProvider {

  constructor(private formBuilder: FormBuilder) {

  }

  public get(): FormGroup {
    const controlsConfig: ControlsConfig<ITicketsFilterFormModel> = {
      filter: [0]
    };

    return this.formBuilder.group(controlsConfig);
  }
}
