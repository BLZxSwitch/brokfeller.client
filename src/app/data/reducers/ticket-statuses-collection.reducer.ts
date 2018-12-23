import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { ITicketStatusDTO } from "../../core/services/service-proxies";
import { TicketStatusesCollectionActionsUnion, TicketStatusesCollectionActionTypes } from "../actions/ticket-statuses.collection.actions";

export interface IState extends EntityState<ITicketStatusDTO> {

}

export const adapter: EntityAdapter<ITicketStatusDTO> = createEntityAdapter<ITicketStatusDTO>({
  selectId: (ticketStatus: ITicketStatusDTO) => ticketStatus.id,
  sortComparer: false,
});

export const initialState: IState = adapter.getInitialState();

export function reducer(state = initialState, action: TicketStatusesCollectionActionsUnion): IState {
  switch (action.type) {

    case TicketStatusesCollectionActionTypes.TicketStatusesLoadSuccess: {
      return adapter.upsertMany(action.payload.ticketStatuses, {
        ...state
      });
    }

    case TicketStatusesCollectionActionTypes.TicketStatusAddSuccess: {
      return adapter.addOne(action.payload.ticketStatus, {
        ...state
      });
    }

    case TicketStatusesCollectionActionTypes.TicketStatusEditSuccess: {
      return adapter.updateOne({
        id: action.payload.ticketStatus.id,
        changes: action.payload.ticketStatus
      }, {
        ...state
      });
    }

    case TicketStatusesCollectionActionTypes.TicketStatusDeleteSuccess: {
      return adapter.removeOne(action.payload.ticketStatusId, {
        ...state
      });
    }

    default:
      return state;
  }
}
