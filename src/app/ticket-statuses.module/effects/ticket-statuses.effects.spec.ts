// import { cold, hot } from "jasmine-marbles";
// import { createInjectorWithActionsAndStore, TestActions } from "../../../unit-tests.components/mocks/actions";
// import { get } from "../../../unit-tests.components/mocks/createInjector";
// import { DocumentTypeDTO } from "../../core/services/service-proxies";
// import { DocumentTypeAddRequest, DocumentTypeEditRequest } from "../../data/actions/document-types.collection.actions";
// import { DocumentTypeSubmit } from "../actions/document-types.actions";
// import { TicketsEffects } from "./ticket-statuses.effects";
//
// describe("DocumentTypesEffects", () => {
//
//   let actions$: TestActions;
//
//   beforeEach(() => {
//     actions$ = createInjectorWithActionsAndStore(TicketsEffects);
//   });
//
//   describe("upsertDocumentType$", () => {
//     it("should return a DocumentTypeEditRequest on TicketStatusSubmit when id is defined", () => {
//       const documentType = new DocumentTypeDTO();
//       documentType.id = "id";
//       documentType.name = "name";
//
//       const effects = get<TicketsEffects>();
//
//       const completion = new DocumentTypeEditRequest({documentType});
//
//       actions$.stream = hot("-a", {
//           a: new DocumentTypeSubmit({documentType})
//         }
//       );
//       const expected = cold("-b", {b: completion});
//
//       expect(effects.upsertDocumentType$).toBeObservable(expected);
//     });
//
//     it("should return a DocumentTypeAddRequest on TicketStatusSubmit when id is undefined", () => {
//       const documentType = new DocumentTypeDTO();
//       documentType.id = undefined;
//       documentType.name = "name";
//
//       const effects = get<TicketsEffects>();
//       const completion = new DocumentTypeAddRequest({documentType});
//
//       actions$.stream = hot("-a", {
//           a: new DocumentTypeSubmit({documentType})
//         }
//       );
//       const expected = cold("-b", {b: completion});
//
//       expect(effects.upsertDocumentType$).toBeObservable(expected);
//     });
//   });
// });
