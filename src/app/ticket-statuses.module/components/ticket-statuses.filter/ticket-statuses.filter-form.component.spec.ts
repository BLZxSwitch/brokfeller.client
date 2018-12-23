// import { FormGroup } from "@angular/forms";
// import { cold } from "jasmine-marbles";
// import { Mock } from "moq.ts";
// import { createInjector, get, resolve } from "../../../../unit-tests.components/mocks/createInjector";
// import { Is } from "../../../../unit-tests.components/moq/equal";
// import { AutoSubmitPipeBehavior } from "../../services/auto-submit.pipe-behavior";
// import { TicketsFilterFormProvider } from "../../services/tickets.filter-form.provider";
// import { TicketsFilterFormComponent } from "./tickets.filter-form.component";
//
// describe("Document types filter form component", () => {
//
//   beforeEach(() => {
//     createInjector(TicketsFilterFormComponent);
//   });
//
//   it("Should be resolved", () => {
//     const actual = get<TicketsFilterFormComponent>();
//     expect(actual).toEqual(jasmine.any(TicketsFilterFormComponent));
//   });
//
//   it("Exposes form", () => {
//     const formGroup = new Mock<FormGroup>()
//       .object();
//
//     resolve<TicketsFilterFormProvider>(TicketsFilterFormProvider)
//       .setup(instance => instance.get())
//       .returns(formGroup);
//
//     const component = get<TicketsFilterFormComponent>();
//     const actual = component.form;
//
//     expect(actual).toBe(formGroup);
//   });
//
//   it("Updates the form", () => {
//     const filter = "filter";
//
//     const formGroupMock = new Mock<FormGroup>()
//       .prototypeof(new FormGroup({}));
//
//     resolve<TicketsFilterFormProvider>(TicketsFilterFormProvider)
//       .setup(instance => instance.get())
//       .returns(formGroupMock.object());
//
//     const component = get<TicketsFilterFormComponent>();
//     component.filter = filter;
//
//     formGroupMock.verify(instance => instance.setValue(Is.Eq({filter})));
//   });
//
//   it("Submits the form automatically", () => {
//     const filter = "filter";
//     const formGroup = new Mock<FormGroup>()
//       .setup(instance => instance.valueChanges)
//       .returns(cold("-a", {a: {filter}}))
//       .object();
//
//     resolve<TicketsFilterFormProvider>(TicketsFilterFormProvider)
//       .setup(instance => instance.get())
//       .returns(formGroup);
//
//     resolve<AutoSubmitPipeBehavior>(AutoSubmitPipeBehavior)
//       .setup(instance => instance.get(TicketsFilterFormComponent.formFilterProjector))
//       .returns(value => value);
//
//     const component = get<TicketsFilterFormComponent>();
//     component.ngOnInit();
//
//     expect(component.submitted).toBeObservable(cold(`-a`, {a: filter}));
//   });
// });
