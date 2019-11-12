import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { dashboardRoutes } from './dashboard-layout.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from '../table-list/table-list.component';



@NgModule({
  imports: [
    SharedModule,
    

    /** Egarly Loaded Modules */
    LayoutModule,
    DashboardModule,

    /** Routing */
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [LayoutComponent , DashboardComponent, TableListComponent]
})
export class DashboardLayoutModule { }
