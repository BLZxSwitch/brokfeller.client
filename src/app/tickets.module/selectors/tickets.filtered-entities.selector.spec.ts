// import { cold } from "jasmine-marbles";
// import { Mock } from "moq.ts";
// import { DtoMock } from "../../../unit-tests.components/dto-mock";
// import { IDocumentTypeDTO } from "../../core/services/service-proxies";
// import { IDataState } from "../../data/reducers";
// import * as fromDocumentTypes from "../../data/reducers/document-types-collection.reducer";
// import { ITicketsState,  } from "../reducers";
// import { ticketsFilteredEntitiesSelector } from "./ticket-statuses.filtered-entities.selector";
//
// describe("Document types entities selector", () => {
//
//   it("Returns filtered value", () => {
//     const name = "name";
//     const name1 = "name";
//     const name2 = "na";
//     const documentTypeId1 = "documentTypeId1";
//     const documentTypeId2 = "documentTypeId2";
//
//     const documentTypeDTO1 = new DtoMock<IDocumentTypeDTO>()
//       .property(instance => instance.id = documentTypeId1)
//       .property(instance => instance.name = name1)
//       .object();
//
//     const documentTypeDTO2 = new DtoMock<IDocumentTypeDTO>()
//       .property(instance => instance.id = documentTypeId2)
//       .property(instance => instance.name = name2)
//       .object();
//
//     const documentTypesEntitiesState = new Mock<fromDocumentTypes.IState>()
//       .setup(instance => instance.entities)
//       .returns({
//         [documentTypeId1]: documentTypeDTO1,
//         [documentTypeId2]: documentTypeDTO2
//       })
//       .setup(instance => instance.ids)
//       .returns([documentTypeId1, documentTypeId2])
//       .object();
//
//     const dataState = new Mock<IDataState>()
//       .setup(instance => instance.documentTypes)
//       .returns(documentTypesEntitiesState)
//       .object();
//
//     const documentTypesState = new Mock<ITicketsState>()
//       .setup(instance => instance.ticketStatusesFilter)
//       .returns({name})
//       .object();
//
//     const store = new Mock<any>()
//       .setup(instance => instance.ticketStatuses)
//       .returns(documentTypesState)
//       .setup(instance => instance.data)
//       .returns(dataState)
//       .object();
//
//     const store$ = cold("-a|", {a: store});
//
//     const actual = store$.pipe(ticketsFilteredEntitiesSelector);
//     expect(actual).toBeObservable(cold("-a|", {a: [{...documentTypeDTO1}]}));
//   });
// });
