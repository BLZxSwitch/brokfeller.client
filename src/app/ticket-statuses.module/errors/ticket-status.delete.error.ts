import { HttpErrorResponse, HttpRequest } from "@angular/common/http";
import { AsDescriptable } from "../../shared/descriptable/descriptable.decorator";
import { MapToBadRequest } from "../../shared/map-to-bad-requests/map-to-bad-request.decorator";

@MapToBadRequest("TICKET_STATUS_HAS_TICKETS_DELETE_FAILED")
@AsDescriptable("COMMON.DELETE_OPERATION.FAILED")
export class TicketStatusDeleteError {
  constructor(public request: HttpRequest<any>,
              public response: HttpErrorResponse) {
  }
}
