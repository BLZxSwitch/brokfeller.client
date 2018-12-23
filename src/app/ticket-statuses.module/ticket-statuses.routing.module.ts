import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminGuard } from "../core/services/admin-guard.service";
import { NEW } from "../core/services/routes.service";
import { TicketStatusAddRequest } from "../data/actions/ticket-statuses.collection.actions";
import { TicketStatusesPageContainer } from "./containers/ticket-statuses.page/ticket-statuses.page.container";

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild([
      {
        component: TicketStatusesPageContainer,
        path: "",
      },
      {
        component: TicketStatusesPageContainer,
        path: NEW,
        data: {addEntityAction: TicketStatusAddRequest},
      },
    ])
  ],
  providers: [
    AdminGuard,
  ],
})
export class TicketStatusesRoutingModule {
}
