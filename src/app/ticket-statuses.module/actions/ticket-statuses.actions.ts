import { Action } from "@ngrx/store";
import { ITicketStatusDTO } from "../../core/services/service-proxies";

export enum TicketStatusActionTypes {
  TicketStatusAdd = "[TicketStatus] Add",
  TicketStatusEdit = "[TicketStatus] Edit",
  TicketStatusDelete = "[TicketStatus] Delete",
  TicketStatusSubmit = "[TicketStatus] TicketStatus Submit",
  TicketStatusDialogClosed = "[TicketStatus] TicketStatus Dialog Closed",
}

export class TicketStatusAdd implements Action {
  public readonly type = TicketStatusActionTypes.TicketStatusAdd;
}

export class TicketStatusEdit implements Action {
  public readonly type = TicketStatusActionTypes.TicketStatusEdit;

  constructor(public payload: { ticketStatus: ITicketStatusDTO }) {
  }
}

export class TicketStatusDelete implements Action {
  public readonly type = TicketStatusActionTypes.TicketStatusDelete;

  constructor(public payload: { ticketStatusId: string }) {
  }
}

export class TicketStatusSubmit implements Action {
  public readonly type = TicketStatusActionTypes.TicketStatusSubmit;

  constructor(public payload: { ticketStatus: ITicketStatusDTO }) {
  }
}

export class TicketStatusDialogClosed implements Action {
  public readonly type = TicketStatusActionTypes.TicketStatusDialogClosed;
}
