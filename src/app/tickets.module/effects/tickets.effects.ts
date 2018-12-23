import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { TicketDTO } from "../../core/services/service-proxies";
import {
  TicketAddRequest, TicketDeleteRequest,
  TicketEditRequest,
  TicketsCollectionActionTypes
} from "../../data/actions/tickets.collection.actions";
import { EffectUtilsService } from "../../shared/services/effect-utils.service";
import { TicketActionTypes, TicketDialogClosed, TicketSubmit } from "../actions/tickets.actions";
import { TicketDialogContainer } from "../containers/ticket-dialog/ticket-dialog.container";

@Injectable()
export class TicketsEffects {

  @Effect()
  public upsertTicket$ = this.actions$.pipe(
    ofType<TicketSubmit>(TicketActionTypes.TicketSubmit),
    map(value => value.payload),
    map(({ticket}) => {
      return new TicketDTO({...ticket});
    }),
    map(ticket => ticket.id
      ? new TicketEditRequest({ticket})
      : new TicketAddRequest({ticket})
    )
  );

  @Effect()
  public showDialogEdit$ = this.effectUtilsService.createOpenDialogEffect([TicketActionTypes.TicketEdit],
    [TicketsCollectionActionTypes.TicketEditSuccess],
    TicketDialogContainer,
    TicketDialogClosed);

  @Effect()
  public showDialogAdd$ = this.effectUtilsService.createOpenDialogEffect([TicketActionTypes.TicketAdd],
    [TicketsCollectionActionTypes.TicketAddSuccess],
    TicketDialogContainer,
    TicketDialogClosed);

  @Effect()
  public deleteTicket$ = this.effectUtilsService.createConfirmDialogEffect(TicketActionTypes.TicketDelete,
    "TICKETS.FORM.CONFIRM_DELETE",
    TicketDeleteRequest);

  @Effect({dispatch: false})
  public editSuccessSnack$ = this.effectUtilsService.createSuccessSnackEffect(TicketsCollectionActionTypes.TicketEditSuccess,
    "TICKETS.FORM.SAVED_SUCCESSFULLY");

  @Effect({dispatch: false})
  public addSuccessSnack$ = this.effectUtilsService.createSuccessSnackEffect(TicketsCollectionActionTypes.TicketAddSuccess,
    "TICKETS.FORM.ADDED_SUCCESSFULLY");

  @Effect({dispatch: false})
  public deleteSuccessSnack$ = this.effectUtilsService.createSuccessSnackEffect(
    TicketsCollectionActionTypes.TicketDeleteSuccess,
    "TICKETS.FORM.DELETE_SUCCESSFULLY");

  @Effect({dispatch: false})
  public deleteErrorSnack$ = this.effectUtilsService.createErrorSnackEffectByTranslationKey(
    TicketsCollectionActionTypes.TicketAddFailure,
    "TICKETS.FORM.ADD_ERROR");

  constructor(private actions$: Actions,
              private effectUtilsService: EffectUtilsService) {
  }
}
