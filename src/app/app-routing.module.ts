import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusiciansComponent} from "./musicians/musicians.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MusicianDetailComponent} from "./musician-detail/musician-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'musicians', component: MusiciansComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: MusicianDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
