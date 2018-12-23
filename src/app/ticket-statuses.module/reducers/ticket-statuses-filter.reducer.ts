import { TicketStatusesFilterChanged } from "../actions/ticket-statuses-filter.actions";

export interface IState {
  name: string;
}

const initialState: IState = {
  name: undefined
};

export function reducer(state = initialState, action: TicketStatusesFilterChanged) {

  switch (action.type) {

    case TicketStatusesFilterChanged.type: {
      const {name} = action.payload;
      return {
        ...state,
        name
      };
    }

    default:
      return state;
  }
}

export const getName = (state: IState) => state.name;
