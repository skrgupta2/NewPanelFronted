import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsGridComponent } from './news-grid/news-grid.component';

const routes: Routes = [{
  path: 'admin', children: [{ path: '', component: AdminloginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [{ path: 'newsgrid', component: NewsGridComponent }] },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
