import { Action } from "@ngrx/store";
import { TicketDTO, TicketResponseDTO } from "../../core/services/service-proxies";

export enum TicketsCollectionActionTypes {
  TicketsLoad = "[Tickets] Tickets Load",
  TicketsLoadSuccess = "[Tickets] Tickets Load Success",
  TicketsLoadFailure = "[Tickets] Tickets Load Failure",
  TicketEditRequest = "[Tickets] Ticket Edit Request Action",
  TicketEditSuccess = "[Tickets] Ticket Edit Success Action",
  TicketEditFailure = "[Tickets] Ticket Edit Failure Action",
  TicketAddRequest = "[Tickets] Ticket Add Request Action",
  TicketAddSuccess = "[Tickets] Ticket Add Success Action",
  TicketAddFailure = "[Tickets] Ticket Add Failure Action",
  TicketDeleteRequest = "[Tickets] Ticket Delete Request Action",
  TicketDeleteSuccess = "[Tickets] Ticket Delete Success Action",
  TicketDeleteFailure = "[Tickets] Ticket Delete Failure Action",
}

export class TicketsLoad implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketsLoad;
}

export class TicketsLoadSuccess implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketsLoadSuccess;

  constructor(public payload: { tickets: TicketResponseDTO[] }) {
  }
}

export class TicketsLoadFailure implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketsLoadFailure;

  constructor(public payload: any) {
  }
}

export class TicketEditRequest implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketEditRequest;

  constructor(public payload: { ticket: TicketDTO }) {
  }
}

export class TicketEditSuccess implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketEditSuccess;

  constructor(public payload: { ticket: TicketResponseDTO }) {
  }
}

export class TicketEditFailure implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketEditFailure;

  constructor(public payload: any) {
  }
}

export class TicketAddRequest implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketAddRequest;

  constructor(public payload: { ticket: TicketDTO }) {
  }
}

export class TicketAddSuccess implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketAddSuccess;

  constructor(public payload: { ticket: TicketResponseDTO }) {
  }
}

export class TicketAddFailure implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketAddFailure;

  constructor(public payload: any) {
  }
}

export class TicketDeleteRequest implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketDeleteRequest;

  constructor(public payload: { ticketId: string }) {
  }
}

export class TicketDeleteSuccess implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketDeleteSuccess;

  constructor(public payload: { ticketId: string }) {
  }
}

export class TicketDeleteFailure implements Action {
  public readonly type = TicketsCollectionActionTypes.TicketDeleteFailure;

  constructor(public payload: any) {
  }
}

export type TicketsCollectionActionsUnion = TicketsLoad
  | TicketsLoadSuccess
  | TicketsLoadFailure
  | TicketEditRequest
  | TicketEditSuccess
  | TicketEditFailure
  | TicketAddRequest
  | TicketAddSuccess
  | TicketAddFailure
  | TicketDeleteRequest
  | TicketDeleteSuccess
  | TicketDeleteFailure;
