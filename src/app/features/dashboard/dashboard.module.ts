import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [DashboardComponent],
  exports:[DashboardComponent],
})
export class DashboardModule { }
