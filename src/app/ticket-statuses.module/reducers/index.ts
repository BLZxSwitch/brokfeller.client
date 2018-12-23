import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { getAllTicketStatusesEntities, getTicketStatusEntities } from "../../data/reducers";
import * as fromRoot from "../../reducers";
import * as fromEntityUpsert from "../../shared/reducer-creators/entity-upsert.reducer-creator";
import { TicketStatusActionTypes, TicketStatusEdit } from "../actions/ticket-statuses.actions";
import * as fromTicketStatusesFilter from "./ticket-statuses-filter.reducer";

export interface ITicketStatusesState {
  ticketStatuses: fromEntityUpsert.IState;
  ticketStatusesFilter: fromTicketStatusesFilter.IState;
}

export const TICKET_STATUSES = "ticketStatuses";

export interface ITicketStatusesStore extends fromRoot.IState {
  ticketStatuses: ITicketStatusesState;
}

export function reducers(): ActionReducerMap<ITicketStatusesState> {
  return {
    ticketStatuses: fromEntityUpsert.createEntityUpsertReducer(
      [TicketStatusActionTypes.TicketStatusEdit],
      TicketStatusActionTypes.TicketStatusAdd,
      TicketStatusActionTypes.TicketStatusDialogClosed,
      (action: TicketStatusEdit) => action.payload.ticketStatus.id),
    ticketStatusesFilter: fromTicketStatusesFilter.reducer
  };
}

export const ticketStatusesFeatureStateProjector = createFeatureSelector<ITicketStatusesState>(TICKET_STATUSES);

export const getTicketStatusesState = createSelector(
  ticketStatusesFeatureStateProjector,
  state => state.ticketStatuses
);

export const getEditingTicketStatusId = createSelector(
  getTicketStatusesState,
  fromEntityUpsert.getEditingEntityId
);

export const getTicketStatusesFilter = createSelector(
  ticketStatusesFeatureStateProjector,
  (state: ITicketStatusesState) => state.ticketStatusesFilter
);

export const getTicketStatusFilterName = createSelector(
  getTicketStatusesFilter,
  fromTicketStatusesFilter.getName,
);

export const getEditingTicketStatus = createSelector(
  getTicketStatusEntities,
  getEditingTicketStatusId,
  (entities, editingTicketStatusId) => entities[editingTicketStatusId]
);
