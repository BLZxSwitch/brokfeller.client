// import { Store } from "@ngrx/store";
// import { cold } from "jasmine-marbles";
// import { It } from "moq.ts";
// import { createInjector, get, resolve } from "../../../../unit-tests.components/mocks/createInjector";
// import { Is } from "../../../../unit-tests.components/moq/equal";
// import { DocumentTypesFilterChanged } from "../../actions/document-types-filter.actions";
// import { ITicketsStore } from "../../reducers";
// import { TicketsFilterContainer } from "./tickets.filter.container";
//
// describe("Document types filter container", () => {
//
//   beforeEach(() => {
//     createInjector(TicketsFilterContainer);
//   });
//
//   it("Should be resolved", () => {
//     const actual = get<TicketsFilterContainer>();
//     expect(actual).toEqual(jasmine.any(TicketsFilterContainer));
//   });
//
//   it("Exposes filter state", () => {
//     const filter$ = cold("a|", {a: "name"});
//
//     resolve<Store<ITicketsStore>>(Store)
//       .setup(instance => instance.pipe(It.IsAny(), It.IsAny()))
//       .returns(filter$);
//
//     const component = get<TicketsFilterContainer>();
//     const actual = component.filter$;
//
//     expect(actual).toBe(filter$);
//   });
//
//   it("Dispatches the action when filter has been changed", () => {
//     const name = "filter";
//
//     const component = get<TicketsFilterContainer>();
//     component.onChange(name);
//
//     const action = new DocumentTypesFilterChanged({name});
//     resolve<Store<ITicketsStore>>(Store)
//       .verify(instance => instance.dispatch(Is.Eq(action)));
//   });
// });
