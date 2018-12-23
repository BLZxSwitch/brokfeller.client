import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { TicketsFilterChanged } from "../../actions/tickets-filter.actions";
import { getTicketsFilterName, ITicketsStore } from "../../reducers";

@Component({
  selector: "pr-tickets-filter",
  styles: [`:host {
    display: block;
  }`],
  templateUrl: "./tickets.filter.container.html"
})
export class TicketsFilterContainer {
  public filter$ = this.store.pipe(select(getTicketsFilterName), filter(value => value !== undefined));

  constructor(
    private store: Store<ITicketsStore>) {
  }

  public onChange(name: string) {
    this.store.dispatch(new TicketsFilterChanged({name}));
  }
}
