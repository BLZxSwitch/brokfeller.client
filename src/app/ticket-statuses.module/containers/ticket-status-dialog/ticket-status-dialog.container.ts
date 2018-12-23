import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { select, Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { ITicketStatusDTO } from "../../../core/services/service-proxies";
import { TicketStatusSubmit } from "../../actions/ticket-statuses.actions";
import * as fromTicketStatuses from "../../reducers/index";

@Component({
  selector: "pr-ticket-status-dialog",
  templateUrl: "./ticket-status-dialog.container.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketStatusDialogContainer {
  public ticketStatus$ = this.store.pipe(select(fromTicketStatuses.getEditingTicketStatus));

  public type$ = this.ticketStatus$.pipe(map(ticketStatus => ticketStatus
    ? "edit"
    : "add"));

  constructor(private dialogRef: MatDialogRef<TicketStatusDialogContainer>,
              private store: Store<fromTicketStatuses.ITicketStatusesStore>) {
  }

  public onSubmit(ticketStatus: ITicketStatusDTO) {
    this.store.dispatch(new TicketStatusSubmit({ticketStatus}));
  }

  public onCancel() {
    this.dialogRef.close();
  }
}
