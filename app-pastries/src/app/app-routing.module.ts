import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PastrieDescriptionComponent } from './pastrie-description/pastrie-description.component';
import { PastrieLoginComponent } from './pastrie-login/pastrie-login.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieGameComponent } from './pastrie-game/pastrie-game.component'

import { GuardService } from './guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
      path: 'pastries',
      component: PastriesComponent
  },
  {
      path: '',
      redirectTo: '/pastries',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: PastrieLoginComponent
  },
  {
      path: 'pastrie/:id',
      component: PastrieDescriptionComponent
  },
  {
    path: 'game',
    component: PastrieGameComponent
  },
  {
    path: 'dashboard',
    // canActivate: [GuardService],
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
