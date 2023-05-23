import {RouterModule, Routes} from "@angular/router";
import {PadletListComponent} from "./padlet-list/padlet-list.component";
import {PadletDetailsComponent} from "./padlet-details/padlet-details.component";
import {NgModule} from "@angular/core";
import {PadletFormComponent} from "./padlet-form/padlet-form.component";
import {LoginComponent} from "./login/login.component";
import {CanNavigateToPadletsGuard} from "./can-navigate-to-padlets.guard";

const routes: Routes = [
  { path: '', redirectTo: 'padlets', pathMatch: 'full'},
  { path: 'padlets', component: PadletListComponent},
  { path: 'mypadlets', component: PadletListComponent},
  { path: 'padlets/:id', component: PadletDetailsComponent},
  { path: 'padletsform', component: PadletFormComponent, canActivate: [CanNavigateToPadletsGuard]},
  { path: 'padletsform/:id', component: PadletFormComponent, canActivate: [CanNavigateToPadletsGuard]},
  {path: 'padlets/:id/:entrieid', component: PadletDetailsComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToPadletsGuard]
})
export class AppRoutingModule { }
