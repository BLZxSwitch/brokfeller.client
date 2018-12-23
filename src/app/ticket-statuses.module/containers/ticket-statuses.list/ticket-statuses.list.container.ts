import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ITicketStatusDTO } from "../../../core/services/service-proxies";
import { TicketStatusDelete, TicketStatusEdit } from "../../actions/ticket-statuses.actions";
import { ITicketStatusesStore } from "../../reducers";
import { ticketStatusesFilteredEntitiesSelector } from "../../selectors/ticket-statuses.filtered-entities.selector";

@Component({
  selector: "pr-ticket-statuses-list",
  styles: [`:host {
    display: block;
  }`],
  templateUrl: "./ticket-statuses.list.container.html"
})
export class TicketStatusesListContainer {
  public items$: Observable<ITicketStatusDTO[]>;

  constructor(private store: Store<ITicketStatusesStore>) {
    this.items$ = this.store.pipe(ticketStatusesFilteredEntitiesSelector);
  }

  public trackByFn(index: number, {id}): string {
    return id;
  }

  public onEdit(ticketStatus: ITicketStatusDTO): void {
    this.store.dispatch(new TicketStatusEdit({ticketStatus}));
  }

  public onDelete(ticketStatusId: string) {
    this.store.dispatch(new TicketStatusDelete({ticketStatusId}));
  }
}
