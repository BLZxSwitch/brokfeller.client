import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { select, Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { ITicketDTO } from "../../../core/services/service-proxies";
import { TicketSubmit } from "../../actions/tickets.actions";
import * as fromTickets from "../../reducers/index";

@Component({
  selector: "pr-ticket-dialog",
  templateUrl: "./ticket-dialog.container.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketDialogContainer {
  public ticket$ = this.store.pipe(select(fromTickets.getEditingTicket));

  public type$ = this.ticket$.pipe(map(ticket => ticket
    ? "edit"
    : "add"));

  constructor(private dialogRef: MatDialogRef<TicketDialogContainer>,
              private store: Store<fromTickets.ITicketsStore>) {
  }

  public onSubmit(ticket: ITicketDTO) {
    this.store.dispatch(new TicketSubmit({ticket}));
  }

  public onCancel() {
    this.dialogRef.close();
  }
}
