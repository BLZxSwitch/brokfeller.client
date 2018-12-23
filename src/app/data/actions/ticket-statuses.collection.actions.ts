import { Action } from "@ngrx/store";
import { TicketStatusDTO, TicketStatusResponseDTO } from "../../core/services/service-proxies";

export enum TicketStatusesCollectionActionTypes {
  TicketStatusesLoad = "[Ticket Statuses] Ticket Statuses Load",
  TicketStatusesLoadSuccess = "[Ticket Statuses] Ticket Statuses Load Success",
  TicketStatusesLoadFailure = "[Ticket Statuses] Ticket Statuses Load Failure",
  TicketStatusEditRequest = "[Ticket Statuses] Ticket Status Edit Request Action",
  TicketStatusEditSuccess = "[Ticket Statuses] Ticket Status Edit Success Action",
  TicketStatusEditFailure = "[Ticket Statuses] Ticket Status Edit Failure Action",
  TicketStatusAddRequest = "[Ticket Statuses] Ticket Status Add Request Action",
  TicketStatusAddSuccess = "[Ticket Statuses] Ticket Status Add Success Action",
  TicketStatusAddFailure = "[Ticket Statuses] Ticket Status Add Failure Action",
  TicketStatusDeleteRequest = "[Ticket Statuses] Ticket Status Delete Request Action",
  TicketStatusDeleteSuccess = "[Ticket Statuses] Ticket Status Delete Success Action",
  TicketStatusDeleteFailure = "[Ticket Statuses] Ticket Status Delete Failure Action",
}

export class TicketStatusesLoad implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusesLoad;
}

export class TicketStatusesLoadSuccess implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusesLoadSuccess;

  constructor(public payload: { ticketStatuses: TicketStatusResponseDTO[] }) {
  }
}

export class TicketStatusesLoadFailure implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusesLoadFailure;

  constructor(public payload: any) {
  }
}

export class TicketStatusEditRequest implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusEditRequest;

  constructor(public payload: { ticketStatus: TicketStatusDTO }) {
  }
}

export class TicketStatusEditSuccess implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusEditSuccess;

  constructor(public payload: { ticketStatus: TicketStatusResponseDTO }) {
  }
}

export class TicketStatusEditFailure implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusEditFailure;

  constructor(public payload: any) {
  }
}

export class TicketStatusAddRequest implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusAddRequest;

  constructor(public payload: { ticketStatus: TicketStatusDTO }) {
  }
}

export class TicketStatusAddSuccess implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusAddSuccess;

  constructor(public payload: { ticketStatus: TicketStatusResponseDTO }) {
  }
}

export class TicketStatusAddFailure implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusAddFailure;

  constructor(public payload: any) {
  }
}

export class TicketStatusDeleteRequest implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusDeleteRequest;

  constructor(public payload: { ticketStatusId: string }) {
  }
}

export class TicketStatusDeleteSuccess implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusDeleteSuccess;

  constructor(public payload: { ticketStatusId: string }) {
  }
}

export class TicketStatusDeleteFailure implements Action {
  public readonly type = TicketStatusesCollectionActionTypes.TicketStatusDeleteFailure;

  constructor(public payload: any) {
  }
}

export type TicketStatusesCollectionActionsUnion = TicketStatusesLoad
  | TicketStatusesLoadSuccess
  | TicketStatusesLoadFailure
  | TicketStatusEditRequest
  | TicketStatusEditSuccess
  | TicketStatusEditFailure
  | TicketStatusAddRequest
  | TicketStatusAddSuccess
  | TicketStatusAddFailure
  | TicketStatusDeleteRequest
  | TicketStatusDeleteSuccess
  | TicketStatusDeleteFailure;
