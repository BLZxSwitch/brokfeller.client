import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { first, map } from "rxjs/operators";
import { TicketStatusesCollectionActionTypes, TicketStatusesLoad } from "../../data/actions/ticket-statuses.collection.actions";
import { TicketsLoad } from "../../data/actions/tickets.collection.actions";
import * as fromTicketStatuses from "../../ticket-statuses.module/reducers/ticket-statuses-filter.reducer";

@Injectable({
  providedIn: "root"
})
export class DashboardGuard implements CanActivate {

  constructor(private store: Store<fromTicketStatuses.IState>, private actions$: Actions) {
  }

  public canActivate(): Observable<boolean> {
    this.store.dispatch(new TicketStatusesLoad());
    this.store.dispatch(new TicketsLoad());

    return this.actions$.pipe(
      ofType(TicketStatusesCollectionActionTypes.TicketStatusesLoadSuccess, TicketStatusesCollectionActionTypes.TicketStatusesLoadFailure),
      first(),
      map(() => true)
    );
  }
}
