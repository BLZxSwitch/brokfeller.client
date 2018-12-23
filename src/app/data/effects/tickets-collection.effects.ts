import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { TicketsServiceProxy } from "../../core/services/service-proxies";
import {
  TicketAddFailure,
  TicketAddRequest, TicketAddSuccess,
  TicketDeleteFailure,
  TicketDeleteRequest, TicketDeleteSuccess,
  TicketEditFailure,
  TicketEditRequest,
  TicketEditSuccess,
  TicketsCollectionActionTypes, TicketsLoad, TicketsLoadFailure, TicketsLoadSuccess
} from "../actions/tickets.collection.actions";

@Injectable()
export class TicketCollectionEffects {
  @Effect()
  public ticketsLoad$ = this.actions$.pipe(
    ofType<TicketsLoad>(TicketsCollectionActionTypes.TicketsLoad),
    exhaustMap(() => {
      console.log("ticketsLoad$ticketsLoad$ticketsLoad$ticketsLoad$ticketsLoad$ticketsLoad$ticketsLoad$");
      return this.ticketServiceProxy.getAll()
        .pipe(
          map(tickets => new TicketsLoadSuccess({tickets})),
          catchError(error => of(new TicketsLoadFailure(error)))
        );
    })
  );

  @Effect()
  public editTicket$ = this.actions$.pipe(
    ofType<TicketEditRequest>(TicketsCollectionActionTypes.TicketEditRequest),
    exhaustMap(({payload: {ticket}}) =>
      this.ticketServiceProxy.update(ticket)
        .pipe(
          map(result => new TicketEditSuccess({ticket: result})),
          catchError(error => of(new TicketEditFailure(error)))
        )
    )
  );

  @Effect()
  public deleteTicket$ = this.actions$.pipe(
    ofType<TicketDeleteRequest>(TicketsCollectionActionTypes.TicketDeleteRequest),
    exhaustMap(({payload: {ticketId}}) =>
      this.ticketServiceProxy.delete(ticketId)
        .pipe(
          map(() => new TicketDeleteSuccess({ticketId})),
          catchError(error => of(new TicketDeleteFailure(error)))
        )
    )
  );

  @Effect()
  public addTicket$ = this.actions$.pipe(
    ofType<TicketAddRequest>(TicketsCollectionActionTypes.TicketAddRequest),
    exhaustMap(({payload: {ticket}}) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!ticket");
        console.log(ticket);
        const qqq = this.ticketServiceProxy.add(ticket)
          .pipe(
            map(result => new TicketAddSuccess({ticket: result})),
            catchError(error => of(new TicketAddFailure(error)))
          );
        console.log("!!!!!!!!!!!!!!!!!qqq");
        console.log(qqq);
        return qqq;
      }
    )
  );

  constructor(private actions$: Actions, private ticketServiceProxy: TicketsServiceProxy) {
  }
}
