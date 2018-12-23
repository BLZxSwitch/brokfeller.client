import { Component, Input, OnInit } from "@angular/core";
import { DropEvent } from "ng-drag-drop";
import { TicketDTO } from "../../../core/services/service-proxies";

@Component({
  selector: "pr-dashboard-ticket-item",
  templateUrl: "./dashboard-ticket-item.component.html",
  styleUrls: ["./dashboard-ticket-item.component.scss"]
})
export class DashboardTicketItemComponent implements OnInit {

  @Input() public ticket: TicketDTO;

  public onList1Drop(e: DropEvent) {
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    console.log(e);
    console.log(e.dragData);

    // this.list1.push(e.dragData);
    // this.removeItem(e.dragData, this.list2);
  }

  //
  // public onList2Drop(e: DropEvent) {
  //   this.list2.push(e.dragData);
  //   this.removeItem(e.dragData, this.list1);
  // }
  //
  // public removeItem(item: any, list: Array<any>) {
  //   let index = list.map(function (e) {
  //     return e.name;
  //   }).indexOf(item.name);
  //   list.splice(index, 1);
  // }

  public ngOnInit() {
    // const dashboardItems = document.getElementsByTagName("pr-dashboard-item");
    // for (let i = 0; i < dashboardItems.length; i++) {
    //   (dashboardItems.item(i) as HTMLElement).style.width = 100 / dashboardItems.length + "%";
    // }
  }
}
