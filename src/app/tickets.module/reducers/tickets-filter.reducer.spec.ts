// import { TicketsFilterChanged } from "../actions/document-types-filter.actions";
// import * as fromTicketStatusesFilter from "./document-types-filter.reducer";
//
// describe("Document types filter reducer:", () => {
//   it("Returns default state", () => {
//     const actual = fromTicketStatusesFilter.reducer(undefined, {} as any);
//
//     const expected = {
//       name: undefined,
//     };
//     expect(actual).toEqual(expected);
//   });
//
//   it("Returns updated state on TicketsFilterChanged action", () => {
//     const name = "name";
//     const action = new TicketsFilterChanged({name});
//     const actual = fromTicketStatusesFilter.reducer(undefined, action);
//
//     const expected = {
//       name
//     };
//     expect(actual).toEqual(expected);
//   });
// });
