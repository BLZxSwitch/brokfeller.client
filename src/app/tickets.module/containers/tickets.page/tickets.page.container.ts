import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TicketsLoad } from "../../../data/actions/tickets.collection.actions";
import { TicketAdd } from "../../actions/tickets.actions";
import { ITicketsStore } from "../../reducers";

@Component({
  templateUrl: "./tickets.page.container.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsPageContainer implements OnInit {

  constructor(private store: Store<ITicketsStore>) {
  }

  public onEntityAdd() {
    this.store.dispatch(new TicketAdd());
  }

  public ngOnInit(): void {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    this.store.dispatch(new TicketsLoad());
  }
}
