// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { Mock } from "moq.ts";
// import { createInjector, get, resolve } from "../../../unit-tests.components/mocks/createInjector";
// import { Is } from "../../../unit-tests.components/moq/equal";
// import { ControlsConfig } from "../../shared/form/controls-config";
// import { ITicketFormModel } from "../components/ticket-form/ticket-form-model";
// import { TicketEditFormProvider } from "./dicket-status.edit-form.provider";
//
// describe("DocumentTypesEditFormProvider", () => {
//
//   beforeEach(() => {
//     createInjector(TicketEditFormProvider);
//   });
//
//   it("Should be resolved", () => {
//     const actual = get<TicketEditFormProvider>();
//     expect(actual).toEqual(jasmine.any(TicketEditFormProvider));
//   });
//
//   it("Returns form", () => {
//     const formGroup = new Mock<FormGroup>()
//       .object();
//
//     const formConfig: ControlsConfig<ITicketFormModel> = {
//       name: ["", [Validators.required]],
//       isActive: [true, [Validators.required]]
//     };
//
//     resolve<FormBuilder>(FormBuilder)
//       .setup(instance => instance.group(Is.Eq(formConfig)))
//       .returns(formGroup);
//
//     const component = get<TicketEditFormProvider>();
//     const actual = component.get();
//
//     expect(actual).toBe(formGroup);
//   });
// });
