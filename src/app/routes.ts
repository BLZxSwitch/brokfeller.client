import { Routes } from "@angular/router";
import { AuthGuard } from "./auth/services/auth-guard.service";
import { NotFoundPageComponent } from "./core/containers/not-found-page.component";
import {
  COMPANY_REGISTER,
  COMPANY_SETTINGS,
  DASHBOARD,
  MY_SETTINGS,
  STAFF,
  TERMS_OF_SERVICE,
  TICKET_STATUS, TICKETS
} from "./core/services/routes.service";
import { TermsOfServiceComponent } from "./shared.module/components/terms-of-service/terms-of-service.component";

export const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: DASHBOARD,
  },
  {
    path: TERMS_OF_SERVICE,
    component: TermsOfServiceComponent,
  },
  {
    path: COMPANY_REGISTER,
    loadChildren: "./company-register.module/company-register.module#CompanyRegisterModule"
  },
  {
    path: STAFF,
    loadChildren: "./staff.module/staff.module#StaffModule",
    canActivate: [AuthGuard]
  },
  {
    path: MY_SETTINGS,
    loadChildren: "./user-settings.module/user-settings.module#UserSettingsModule",
    canActivate: [AuthGuard]
  },
  {
    path: COMPANY_SETTINGS,
    loadChildren: "./company-settings/company-settings.module#CompanySettingsModule",
    canActivate: [AuthGuard]
  },
  {
    path: DASHBOARD,
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthGuard]
  },
  {
    path: TICKET_STATUS,
    loadChildren: "./ticket-statuses.module/ticket-statuses.module#TicketStatusesModule",
    canActivate: [AuthGuard]
  },
  {
    path: TICKETS,
    loadChildren: "./tickets.module/tickets.module#TicketsModule",
    canActivate: [AuthGuard]
  },
  {path: "**", component: NotFoundPageComponent}
];
