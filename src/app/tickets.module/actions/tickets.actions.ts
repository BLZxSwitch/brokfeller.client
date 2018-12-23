import { Action } from "@ngrx/store";
import { ITicketDTO } from "../../core/services/service-proxies";

export enum TicketActionTypes {
  TicketAdd = "[Ticket] Add",
  TicketEdit = "[Ticket] Edit",
  TicketDelete = "[Ticket] Delete",
  TicketSubmit = "[Ticket] Ticket Submit",
  TicketDialogClosed = "[Ticket] Ticket Dialog Closed",
}

export class TicketAdd implements Action {
  public readonly type = TicketActionTypes.TicketAdd;
}

export class TicketEdit implements Action {
  public readonly type = TicketActionTypes.TicketEdit;

  constructor(public payload: { ticket: ITicketDTO }) {
  }
}

export class TicketDelete implements Action {
  public readonly type = TicketActionTypes.TicketDelete;

  constructor(public payload: { ticketId: string }) {
  }
}

export class TicketSubmit implements Action {
  public readonly type = TicketActionTypes.TicketSubmit;

  constructor(public payload: { ticket: ITicketDTO }) {
  }
}

export class TicketDialogClosed implements Action {
  public readonly type = TicketActionTypes.TicketDialogClosed;
}
