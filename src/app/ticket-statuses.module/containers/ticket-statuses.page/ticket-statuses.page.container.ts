import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TicketStatusesLoad } from "../../../data/actions/ticket-statuses.collection.actions";
import { TicketStatusAdd } from "../../actions/ticket-statuses.actions";
import { ITicketStatusesStore } from "../../reducers";

@Component({
  templateUrl: "./ticket-statuses.page.container.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketStatusesPageContainer implements OnInit {

  constructor(private store: Store<ITicketStatusesStore>) {
  }

  public onEntityAdd() {
    this.store.dispatch(new TicketStatusAdd());
  }

  public ngOnInit(): void {
    this.store.dispatch(new TicketStatusesLoad());
  }
}
