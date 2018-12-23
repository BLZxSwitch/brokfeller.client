import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { getAllTicketsEntities, getTicketsEntities } from "../../data/reducers";
import * as fromRoot from "../../reducers";
import * as fromEntityUpsert from "../../shared/reducer-creators/entity-upsert.reducer-creator";
import { TicketActionTypes, TicketEdit } from "../actions/tickets.actions";
import * as fromTicketsFilter from "./tickets-filter.reducer";

export interface ITicketsState {
  tickets: fromEntityUpsert.IState;
  ticketsFilter: fromTicketsFilter.IState;
}

export const TICKETS = "tickets";

export interface ITicketsStore extends fromRoot.IState {
  tickets: ITicketsState;
}

export function reducers(): ActionReducerMap<ITicketsState> {
  return {
    tickets: fromEntityUpsert.createEntityUpsertReducer(
      [TicketActionTypes.TicketEdit],
      TicketActionTypes.TicketAdd,
      TicketActionTypes.TicketDialogClosed,
      (action: TicketEdit) => action.payload.ticket.id),
    ticketsFilter: fromTicketsFilter.reducer
  };
}

export const ticketsFeatureStateProjector = createFeatureSelector<ITicketsState>(TICKETS);

export const getTicketsState = createSelector(
  ticketsFeatureStateProjector,
  state => state.tickets
);

export const getEditingTicketId = createSelector(
  getTicketsState,
  fromEntityUpsert.getEditingEntityId
);

export const getTicketsFilter = createSelector(
  ticketsFeatureStateProjector,
  (state: ITicketsState) => state.ticketsFilter
);

export const getTicketsFilterName = createSelector(
  getTicketsFilter,
  fromTicketsFilter.getName,
);

export const getEditingTicket = createSelector(
  getTicketsEntities,
  getEditingTicketId,
  (entities, editingTicketId) => entities[editingTicketId]
);
