import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITicketResponseDTO } from "../../../core/services/service-proxies";

@Component({
  selector: "pr-tickets-list-item",
  styleUrls: ["./tickets.list-item.component.scss"],
  templateUrl: "./tickets.list-item.component.html"
})
export class TicketsListItemComponent {
  @Input()
  public item: ITicketResponseDTO;

  @Output()
  public edit = new EventEmitter();

  @Output()
  public delete = new EventEmitter();
}
