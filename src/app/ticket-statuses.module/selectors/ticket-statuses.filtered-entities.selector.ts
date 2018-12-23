import { createSelector, select } from "@ngrx/store";
import { getAllTicketStatusesEntities } from "../../data/reducers";
import { getTicketStatusFilterName } from "../reducers";

export const ticketStatusesFilteredEntitiesSelector = select(createSelector(
  getAllTicketStatusesEntities,
  getTicketStatusFilterName,
  (entities, name) => entities.filter(entity => !name || entity.name.toLowerCase().includes(name))));
