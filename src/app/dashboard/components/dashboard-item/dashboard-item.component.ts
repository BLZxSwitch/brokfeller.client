import { Component, Input, OnInit } from "@angular/core";
import { DropEvent } from "ng-drag-drop";
import { ITicketDTO, TicketDTO, TicketStatusDTO } from "../../../core/services/service-proxies";
import { TicketSubmit } from "../../../tickets.module/actions/tickets.actions";
import { Store } from "@ngrx/store";
import * as fromTickets from "../../../tickets.module/reducers";

@Component({
  selector: "pr-dashboard-item",
  templateUrl: "./dashboard-item.component.html",
  styleUrls: ["./dashboard-item.component.scss"]
})
export class DashboardItemComponent implements OnInit {

  @Input() public ticketStatus: TicketStatusDTO;
  @Input() public tickets: TicketDTO[];

  constructor(private store: Store<fromTickets.ITicketsStore>) {
  }

  public ngOnInit() {
    const dashboardItems = document.getElementsByTagName("pr-dashboard-item");
    for (let i = 0; i < dashboardItems.length; i++) {
      (dashboardItems.item(i) as HTMLElement).style.width = 100 / dashboardItems.length + "%";
    }
  }

  public getTickets(id) {
    return this.tickets.filter(item => item.ticketStatusId === id);
  }

  public saveTicket(ticket: ITicketDTO) {
    this.store.dispatch(new TicketSubmit({ticket}));
  }

  public onList1Drop(e: DropEvent) {
    if (e.dragData.ticketStatusId !== this.ticketStatus.id) {
      this.saveTicket(new TicketDTO({...e.dragData, ticketStatusId: this.ticketStatus.id}));
    }

    // this.list1.push(e.dragData);
    // this.removeItem(e.dragData, this.list2);
  }

}
