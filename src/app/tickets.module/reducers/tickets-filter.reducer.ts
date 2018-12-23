import { TicketsFilterChanged } from "../actions/tickets-filter.actions";

export interface IState {
  name: string;
}

const initialState: IState = {
  name: undefined
};

export function reducer(state = initialState, action: TicketsFilterChanged) {

  switch (action.type) {

    case TicketsFilterChanged.type: {
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
