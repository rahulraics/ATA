import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from '../table-list/table-list.component';



export const dashboardRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { 
                path: 'dashboard',
                component: DashboardComponent
            },
            { 
                path: 'table-list',
                component: TableListComponent
            },
        ]
    },
]