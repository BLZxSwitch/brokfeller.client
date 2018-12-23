import { InjectionToken, NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { TranslateModule } from "@ngx-translate/core";
import { LayoutModule } from "../layout/layout.module";
import { SharedModule } from "../shared.module/shared.module";
import { EffectUtilsService } from "../shared/services/effect-utils.service";
import { TicketStatusFormComponent } from "./components/ticket-status-form/ticket-status-form.component";
import { TicketStatusesFilterFormComponent } from "./components/ticket-statuses.filter/ticket-statuses.filter-form.component";
import { TicketStatusesListItemComponent } from "./components/ticket-statuses.list-item/ticket-statuses.list-item.component";
import { TicketStatusDialogContainer } from "./containers/ticket-status-dialog/ticket-status-dialog.container";
import { TicketStatusesFilterContainer } from "./containers/ticket-statuses.filter/ticket-statuses.filter.container";
import { TicketStatusesListContainer } from "./containers/ticket-statuses.list/ticket-statuses.list.container";
import { TicketStatusesPageContainer } from "./containers/ticket-statuses.page/ticket-statuses.page.container";
import { TicketStatusesEffects } from "./effects/ticket-statuses.effects";
import { TicketStatusDeleteError } from "./errors/ticket-status.delete.error";
import { ITicketStatusesStore, reducers, TICKET_STATUSES } from "./reducers";
import { AutoSubmitPipeBehavior } from "./services/auto-submit.pipe-behavior";
import { DicketStatusEditFormProvider } from "./services/dicket-status.edit-form.provider";
import { TicketStatusesFilterFormProvider } from "./services/ticket-statuses.filter-form.provider";
import { TicketStatusesRoutingModule } from "./ticket-statuses.routing.module";

export const TICKET_STATUSES_FEATURE_REDUCER_TOKEN =
  new InjectionToken<ActionReducerMap<ITicketStatusesStore>>("DOCUMENT TYPES Feature Reducers");

@NgModule({
  declarations: [
    TicketStatusesPageContainer,
    TicketStatusesListContainer,
    TicketStatusesFilterContainer,
    TicketStatusesFilterFormComponent,
    TicketStatusDialogContainer,
    TicketStatusFormComponent,
    TicketStatusesListItemComponent
  ],
  imports: [
    TicketStatusesRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    LayoutModule,
    StoreModule.forFeature(TICKET_STATUSES, TICKET_STATUSES_FEATURE_REDUCER_TOKEN as any),
    EffectsModule.forFeature([
      TicketStatusesEffects
    ])
  ],
  providers: [
    {
      provide: TICKET_STATUSES_FEATURE_REDUCER_TOKEN,
      useFactory: reducers
    },
    TicketStatusesFilterFormProvider,
    AutoSubmitPipeBehavior,
    DicketStatusEditFormProvider,
    EffectUtilsService,
    TicketStatusDeleteError
  ],
  entryComponents: [
    TicketStatusFormComponent,
    TicketStatusesPageContainer,
    TicketStatusDialogContainer
  ]
})
export class TicketStatusesModule {
}
