import { Action } from "@ngrx/store";

export class TicketsFilterChanged implements Action {
  public static readonly type = "[Tickets Filter] Tickets Filter Has Been Changed";
  public readonly type = TicketsFilterChanged.type;

  constructor(public payload: {
    name: string;
  }) {
  }
}
