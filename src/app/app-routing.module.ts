import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutModule } from './features/dashboard-layout.module';


const routes: Routes =[
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    loadChildren: './features/dashboard-layout.module#DashboardLayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
