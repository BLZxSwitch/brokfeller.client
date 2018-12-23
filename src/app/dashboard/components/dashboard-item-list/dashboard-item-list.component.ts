import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { RoutesService } from "../../../core/services/routes.service";
import { TicketDTO, TicketStatusDTO } from "../../../core/services/service-proxies";

@Component({
  selector: "pr-dashboard-item-list",
  templateUrl: "./dashboard-item-list.component.html",
  styleUrls: ["./dashboard-item-list.component.scss"]
})
export class DashboardItemListComponent {

  @Input() public ticketStatuses: TicketStatusDTO[];

  @Input() public tickets: TicketDTO[];

  constructor(public routesService: RoutesService) {
  }

  public trackByFn(index, {id}) {
    return id;
  }
}
