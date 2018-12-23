import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { ITicketDTO } from "../../core/services/service-proxies";
import { TicketsCollectionActionsUnion, TicketsCollectionActionTypes } from "../actions/tickets.collection.actions";

export interface IState extends EntityState<ITicketDTO> {

}

export const adapter: EntityAdapter<ITicketDTO> = createEntityAdapter<ITicketDTO>({
  selectId: (ticket: ITicketDTO) => ticket.id,
  sortComparer: false,
});

export const initialState: IState = adapter.getInitialState();

export function reducer(state = initialState, action: TicketsCollectionActionsUnion): IState {
  switch (action.type) {

    case TicketsCollectionActionTypes.TicketsLoadSuccess: {
      return adapter.upsertMany(action.payload.tickets, {
        ...state
      });
    }

    case TicketsCollectionActionTypes.TicketAddSuccess: {
      return adapter.addOne(action.payload.ticket, {
        ...state
      });
    }

    case TicketsCollectionActionTypes.TicketEditSuccess: {
      return adapter.updateOne({
        id: action.payload.ticket.id,
        changes: action.payload.ticket
      }, {
        ...state
      });
    }

    case TicketsCollectionActionTypes.TicketDeleteSuccess: {
      return adapter.removeOne(action.payload.ticketId, {
        ...state
      });
    }

    default:
      return state;
  }
}
