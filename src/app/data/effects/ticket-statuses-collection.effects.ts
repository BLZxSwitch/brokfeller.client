import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { TicketStatusServiceProxy } from "../../core/services/service-proxies";
import {
  TicketStatusAddFailure,
  TicketStatusAddRequest, TicketStatusAddSuccess,
  TicketStatusDeleteFailure,
  TicketStatusDeleteRequest, TicketStatusDeleteSuccess,
  TicketStatusEditFailure,
  TicketStatusEditRequest,
  TicketStatusEditSuccess,
  TicketStatusesCollectionActionTypes, TicketStatusesLoad, TicketStatusesLoadFailure, TicketStatusesLoadSuccess
} from "../actions/ticket-statuses.collection.actions";

@Injectable()
export class TicketStatusCollectionEffects {
  @Effect()
  public ticketStatusesLoad$ = this.actions$.pipe(
    ofType<TicketStatusesLoad>(TicketStatusesCollectionActionTypes.TicketStatusesLoad),
    exhaustMap(() =>
      this.ticketStatusServiceProxy.getAll()
        .pipe(
          map(ticketStatuses => new TicketStatusesLoadSuccess({ticketStatuses})),
          catchError(error => of(new TicketStatusesLoadFailure(error)))
        )
    )
  );

  @Effect()
  public editTicketStatus$ = this.actions$.pipe(
    ofType<TicketStatusEditRequest>(TicketStatusesCollectionActionTypes.TicketStatusEditRequest),
    exhaustMap(({payload: {ticketStatus}}) =>
      this.ticketStatusServiceProxy.update(ticketStatus)
        .pipe(
          map(result => new TicketStatusEditSuccess({ticketStatus: result})),
          catchError(error => of(new TicketStatusEditFailure(error)))
        )
    )
  );

  @Effect()
  public deleteTicketStatus$ = this.actions$.pipe(
    ofType<TicketStatusDeleteRequest>(TicketStatusesCollectionActionTypes.TicketStatusDeleteRequest),
    exhaustMap(({payload: {ticketStatusId}}) =>
      this.ticketStatusServiceProxy.delete(ticketStatusId)
        .pipe(
          map(() => new TicketStatusDeleteSuccess({ticketStatusId})),
          catchError(error => of(new TicketStatusDeleteFailure(error)))
        )
    )
  );

  @Effect()
  public addTicketStatus$ = this.actions$.pipe(
    ofType<TicketStatusAddRequest>(TicketStatusesCollectionActionTypes.TicketStatusAddRequest),
    exhaustMap(({payload: {ticketStatus}}) => {
      console.log("ticketStatus!!!!!!!!!!!!!!!!!!!!!");
      console.log(ticketStatus);
      return this.ticketStatusServiceProxy.add(ticketStatus)
        .pipe(
          map(result => new TicketStatusAddSuccess({ticketStatus: result})),
          catchError(error => of(new TicketStatusAddFailure(error)))
        );}
    )
  );

  constructor(private actions$: Actions, private ticketStatusServiceProxy: TicketStatusServiceProxy) {
  }
}
