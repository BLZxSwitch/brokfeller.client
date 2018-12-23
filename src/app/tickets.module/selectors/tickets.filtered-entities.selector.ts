import { createSelector, select } from "@ngrx/store";
import { getAllTicketsEntities } from "../../data/reducers";
import { getTicketsFilterName } from "../reducers";

export const ticketsFilteredEntitiesSelector = select(createSelector(
  getAllTicketsEntities,
  getTicketsFilterName,
  (entities, name) => entities.filter(entity => !name || entity.name.toLowerCase().includes(name))));
