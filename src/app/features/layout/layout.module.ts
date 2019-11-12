import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [SharedModule],
  declarations: [LayoutComponent],
  exports:[LayoutComponent],
})
export class LayoutModule { }
