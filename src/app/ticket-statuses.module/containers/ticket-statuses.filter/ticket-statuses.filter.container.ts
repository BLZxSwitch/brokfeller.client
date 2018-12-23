import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { TicketStatusesFilterChanged } from "../../actions/ticket-statuses-filter.actions";
import { getTicketStatusFilterName, ITicketStatusesStore } from "../../reducers";

@Component({
  selector: "pr-ticket-statuses-filter",
  styles: [`:host {
    display: block;
  }`],
  templateUrl: "./ticket-statuses.filter.container.html"
})
export class TicketStatusesFilterContainer {
  public filter$ = this.store.pipe(select(getTicketStatusFilterName), filter(value => value !== undefined));

  constructor(
    private store: Store<ITicketStatusesStore>) {
  }

  public onChange(name: string) {
    this.store.dispatch(new TicketStatusesFilterChanged({name}));
  }
}
