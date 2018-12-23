// import { FormBuilder, FormGroup } from "@angular/forms";
// import { Mock } from "moq.ts";
// import { createInjector, get, resolve } from "../../../unit-tests.components/mocks/createInjector";
// import { Is } from "../../../unit-tests.components/moq/equal";
// import { ControlsConfig } from "../../shared/form/controls-config";
// import { ITicketsFilterFormModel } from "../components/tickets.filter/tickets.filter-form.model";
// import { TicketsFilterFormProvider } from "./tickets.filter-form.provider";
//
// describe("Document types filter form provider", () => {
//
//   beforeEach(() => {
//     createInjector(TicketsFilterFormProvider);
//   });
//
//   it("Should be resolved", () => {
//     const actual = get<TicketsFilterFormProvider>();
//     expect(actual).toEqual(jasmine.any(TicketsFilterFormProvider));
//   });
//
//   it("Returns form", () => {
//     const formGroup = new Mock<FormGroup>()
//       .object();
//
//     const formConfig: ControlsConfig<ITicketsFilterFormModel> = {
//       filter: [0]
//     };
//
//     resolve<FormBuilder>(FormBuilder)
//       .setup(instance => instance.group(Is.Eq(formConfig)))
//       .returns(formGroup);
//
//     const component = get<TicketsFilterFormProvider>();
//     const actual = component.get();
//
//     expect(actual).toBe(formGroup);
//   });
// });
