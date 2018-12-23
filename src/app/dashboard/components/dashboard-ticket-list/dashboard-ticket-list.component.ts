import { Component, Input } from "@angular/core";
import { RoutesService } from "../../../core/services/routes.service";
import { TicketDTO } from "../../../core/services/service-proxies";

@Component({
  selector: "pr-dashboard-ticket-list",
  templateUrl: "./dashboard-ticket-list.component.html",
  styleUrls: ["./dashboard-ticket-list.component.scss"]
})
export class DashboardTicketListComponent {

  @Input() public tickets: TicketDTO[];

  constructor(public routesService: RoutesService) {
  }

  public trackByFn(index, {id}) {
    return id;
  }
}
