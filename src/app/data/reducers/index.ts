import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromEmployees from "../../data/reducers/employees.reducer";
import * as fromTicketStatuses from "../../data/reducers/ticket-statuses-collection.reducer";
import * as fromTickets from "../../data/reducers/tickets-collection.reducer";
import * as fromRoot from "../../reducers";

export interface IDataState {
  employees: fromEmployees.IState;
  ticketStatuses: fromTicketStatuses.IState;
  tickets: fromTickets.IState;
}

export const DATA = "data";

export interface IState extends fromRoot.IState {
  data: IDataState;
}

export const reducers: ActionReducerMap<IDataState> = {
  employees: fromEmployees.reducer,
  ticketStatuses: fromTicketStatuses.reducer,
  tickets: fromTickets.reducer
};

export const getDataFeatureState = createFeatureSelector<IDataState>(DATA);

export const getEmployeesEntitiesState = createSelector(
  getDataFeatureState,
  state => state.employees
);

export const getTicketStatusesState = createSelector(
  getDataFeatureState,
  state => state.ticketStatuses
);

export const getTicketsState = createSelector(
  getDataFeatureState,
  state => state.tickets
);

export const {
  selectIds: getEmployeeIds,
  selectEntities: getEmployeeEntities,
  selectAll: getAllEmployees,
  selectTotal: getTotalEmployees
} = fromEmployees.adapter.getSelectors(getEmployeesEntitiesState);

export const {
  selectIds: getTicketStatusIds,
  selectEntities: getTicketStatusEntities,
  selectAll: getAllTicketStatusesEntities,
  selectTotal: getTotalTicketStatuses
} = fromTicketStatuses.adapter.getSelectors(getTicketStatusesState);

export const {
  selectIds: getTicketsIds,
  selectEntities: getTicketsEntities,
  selectAll: getAllTicketsEntities,
  selectTotal: getTotalTickets
} = fromTickets.adapter.getSelectors(getTicketsState);
