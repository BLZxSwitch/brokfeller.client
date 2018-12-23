import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import {
  EmployeesServiceProxy,
  InvitationServiceProxy, TicketsServiceProxy, TicketStatusServiceProxy,
} from "../core/services/service-proxies";
import { EmployeesEffects } from "./effects/employees.effects";
import { TicketStatusCollectionEffects } from "./effects/ticket-statuses-collection.effects";
import { TicketCollectionEffects } from "./effects/tickets-collection.effects";
import { DATA, reducers } from "./reducers";

@NgModule({
  imports: [
    StoreModule.forFeature(DATA, reducers),
    EffectsModule.forFeature([
      EmployeesEffects,
      TicketStatusCollectionEffects,
      TicketCollectionEffects
    ]),
  ],
  declarations: [],
  entryComponents: [],
  providers: [
    EmployeesServiceProxy,
    InvitationServiceProxy,
    TicketStatusServiceProxy,
    TicketsServiceProxy
  ]
})
export class DataModule {
}
