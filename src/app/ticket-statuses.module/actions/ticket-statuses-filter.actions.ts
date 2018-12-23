import { Action } from "@ngrx/store";

export class TicketStatusesFilterChanged implements Action {
  public static readonly type = "[Ticket Statuses Filter] Ticket Statuses Filter Has Been Changed";
  public readonly type = TicketStatusesFilterChanged.type;

  constructor(public payload: {
    name: string;
  }) {
  }
}
