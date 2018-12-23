import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ITicketDTO } from "../../../core/services/service-proxies";
import { TicketDelete, TicketEdit } from "../../actions/tickets.actions";
import { ITicketsStore } from "../../reducers";
import { ticketsFilteredEntitiesSelector } from "../../selectors/tickets.filtered-entities.selector";

@Component({
  selector: "pr-tickets-list",
  styles: [`:host {
    display: block;
  }`],
  templateUrl: "./tickets.list.container.html"
})
export class TicketsListContainer {
  public items$: Observable<ITicketDTO[]>;

  constructor(private store: Store<ITicketsStore>) {
    this.items$ = this.store.pipe(ticketsFilteredEntitiesSelector);
  }

  public trackByFn(index: number, {id}): string {
    return id;
  }

  public onEdit(ticket: ITicketDTO): void {
    this.store.dispatch(new TicketEdit({ticket}));
  }

  public onDelete(ticketId: string) {
    this.store.dispatch(new TicketDelete({ticketId}));
  }
}
