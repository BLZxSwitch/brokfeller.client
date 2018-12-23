import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { TicketStatusDTO } from "../../core/services/service-proxies";
import {
  TicketStatusAddRequest, TicketStatusDeleteRequest,
  TicketStatusEditRequest,
  TicketStatusesCollectionActionTypes
} from "../../data/actions/ticket-statuses.collection.actions";
import { EffectUtilsService } from "../../shared/services/effect-utils.service";
import { TicketStatusActionTypes, TicketStatusDialogClosed, TicketStatusSubmit } from "../actions/ticket-statuses.actions";
import { TicketStatusDialogContainer } from "../containers/ticket-status-dialog/ticket-status-dialog.container";

@Injectable()
export class TicketStatusesEffects {

  @Effect()
  public upsertTicketStatus$ = this.actions$.pipe(
    ofType<TicketStatusSubmit>(TicketStatusActionTypes.TicketStatusSubmit),
    map(value => value.payload),
    map(({ticketStatus}) => {
      return new TicketStatusDTO({...ticketStatus});
    }),
    map(ticketStatus => ticketStatus.id
      ? new TicketStatusEditRequest({ticketStatus})
      : new TicketStatusAddRequest({ticketStatus})
    )
  );

  @Effect()
  public showDialogEdit$ = this.effectUtilsService.createOpenDialogEffect([TicketStatusActionTypes.TicketStatusEdit],
    [TicketStatusesCollectionActionTypes.TicketStatusEditSuccess],
    TicketStatusDialogContainer,
    TicketStatusDialogClosed);

  @Effect()
  public showDialogAdd$ = this.effectUtilsService.createOpenDialogEffect([TicketStatusActionTypes.TicketStatusAdd],
    [TicketStatusesCollectionActionTypes.TicketStatusAddSuccess],
    TicketStatusDialogContainer,
    TicketStatusDialogClosed);

  @Effect()
  public deleteTicketStatus$ = this.effectUtilsService.createConfirmDialogEffect(TicketStatusActionTypes.TicketStatusDelete,
    "TICKETS.FORM.CONFIRM_DELETE",
    TicketStatusDeleteRequest);

  @Effect({dispatch: false})
  public editSuccessSnack$ = this.effectUtilsService.createSuccessSnackEffect(TicketStatusesCollectionActionTypes.TicketStatusEditSuccess,
    "TICKETS.FORM.SAVED_SUCCESSFULLY");

  @Effect({dispatch: false})
  public addSuccessSnack$ = this.effectUtilsService.createSuccessSnackEffect(TicketStatusesCollectionActionTypes.TicketStatusAddSuccess,
    "TICKETS.FORM.ADDED_SUCCESSFULLY");

  @Effect({dispatch: false})
  public deleteSuccessSnack$ = this.effectUtilsService.createSuccessSnackEffect(
    TicketStatusesCollectionActionTypes.TicketStatusDeleteSuccess,
    "TICKETS.FORM.DELETE_SUCCESSFULLY");

  @Effect({dispatch: false})
  public deleteErrorSnack$ = this.effectUtilsService.createErrorSnackEffectByTranslationKey(
    TicketStatusesCollectionActionTypes.TicketStatusAddFailure,
    "TICKETS.FORM.ADD_ERROR");

  constructor(private actions$: Actions,
              private effectUtilsService: EffectUtilsService) {
  }
}
