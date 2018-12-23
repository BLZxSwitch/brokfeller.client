import { InjectionToken, NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { TranslateModule } from "@ngx-translate/core";
import { LayoutModule } from "../layout/layout.module";
import { SharedModule } from "../shared.module/shared.module";
import { EffectUtilsService } from "../shared/services/effect-utils.service";
import { TicketFormComponent } from "./components/ticket-form/ticket-form.component";
import { TicketsFilterFormComponent } from "./components/tickets.filter/tickets.filter-form.component";
import { TicketsListItemComponent } from "./components/tickets.list-item/tickets.list-item.component";
import { TicketDialogContainer } from "./containers/ticket-dialog/ticket-dialog.container";
import { TicketsFilterContainer } from "./containers/tickets.filter/tickets.filter.container";
import { TicketsListContainer } from "./containers/tickets.list/tickets.list.container";
import { TicketsPageContainer } from "./containers/tickets.page/tickets.page.container";
import { TicketsEffects } from "./effects/tickets.effects";
import { ITicketsStore, reducers, TICKETS } from "./reducers";
import { AutoSubmitPipeBehavior } from "./services/auto-submit.pipe-behavior";
import { TicketEditFormProvider } from "./services/ticket.edit-form.provider";
import { TicketsFilterFormProvider } from "./services/tickets.filter-form.provider";
import { TicketsRoutingModule } from "./tickets.routing.module";

export const TICKETS_FEATURE_REDUCER_TOKEN =
  new InjectionToken<ActionReducerMap<ITicketsStore>>("DOCUMENT TYPES Feature Reducers");

@NgModule({
  declarations: [
    TicketsPageContainer,
    TicketsListContainer,
    TicketsFilterContainer,
    TicketsFilterFormComponent,
    TicketDialogContainer,
    TicketFormComponent,
    TicketsListItemComponent
  ],
  imports: [
    TicketsRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    LayoutModule,
    StoreModule.forFeature(TICKETS, TICKETS_FEATURE_REDUCER_TOKEN as any),
    EffectsModule.forFeature([
      TicketsEffects
    ])
  ],
  providers: [
    {
      provide: TICKETS_FEATURE_REDUCER_TOKEN,
      useFactory: reducers
    },
    TicketsFilterFormProvider,
    AutoSubmitPipeBehavior,
    TicketEditFormProvider,
    EffectUtilsService,
  ],
  entryComponents: [
    TicketFormComponent,
    TicketsPageContainer,
    TicketDialogContainer
  ]
})
export class TicketsModule {
}
