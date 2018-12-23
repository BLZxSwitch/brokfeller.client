import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITicketStatusResponseDTO } from "../../../core/services/service-proxies";

@Component({
  selector: "pr-ticket-statuses-list-item",
  styleUrls: ["./ticket-statuses.list-item.component.scss"],
  templateUrl: "./ticket-statuses.list-item.component.html"
})
export class TicketStatusesListItemComponent {
  @Input()
  public item: ITicketStatusResponseDTO;

  @Output()
  public edit = new EventEmitter();

  @Output()
  public delete = new EventEmitter();
}
