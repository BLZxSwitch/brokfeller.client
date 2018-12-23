import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminGuard } from "../core/services/admin-guard.service";
import { NEW } from "../core/services/routes.service";
import { TicketAddRequest } from "../data/actions/tickets.collection.actions";
import { TicketsPageContainer } from "./containers/tickets.page/tickets.page.container";

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild([
      {
        component: TicketsPageContainer,
        path: "",
      },
      {
        component: TicketsPageContainer,
        path: NEW,
        data: {addEntityAction: TicketAddRequest},
      },
    ])
  ],
  providers: [
    AdminGuard,
  ],
})
export class TicketsRoutingModule {
}
