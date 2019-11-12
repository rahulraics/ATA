import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule } from '@angular/material';



@NgModule({ 
  imports: [
    /** Common Angular Modules */
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    /** Material Modules */
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    /** Components */
    FooterComponent,
    SidebarComponent,
    NavbarComponent     
    /** Directives */

    /** Pipes */
  ],
  exports: [
    /** Common Angular Modules */
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    
     /** Material Modules */
     MatButtonModule,
     MatRippleModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     MatTooltipModule,

    /** Components */
    FooterComponent,
    SidebarComponent,
    NavbarComponent
  ]

    
})
export class SharedModule { }
