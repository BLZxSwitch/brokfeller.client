import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getAllTicketsEntities, getAllTicketStatusesEntities } from "../../../data/reducers";
import * as fromTicketStatus from "../../../ticket-statuses.module/reducers";
// import * as fromDashboard from "../../reducers";

@Component({
  selector: "pr-organizational-units-page",
  templateUrl: "./dashboard.page.component.html",
  styleUrls: ["./dashboard.page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {

  public ticketStatuses$ = this.store.pipe(select(getAllTicketStatusesEntities));
  public tickets$ = this.store.pipe(select(getAllTicketsEntities));

  constructor(private store: Store<fromTicketStatus.ITicketStatusesState>) {
    // this.ticketStatuses$ = this.store.pipe(select(getAllTicketStatusesEntities));
    // this.tickets$ = this.store.pipe(select(getAllTicketsEntities));
  }
}
