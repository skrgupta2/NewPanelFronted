import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { ReporterloginComponent } from './reporterlogin/reporterlogin.component';
//import { LoginComponent } from './login/login.component';
//import { AdminComponent } from './admin/admin.component';
//import { AuthGuard } from './auth.guard';


const routes: Routes = [{
  path: 'reporter', children: [{ path: 'newsform', component: NewsFormComponent },
  { path: '', component: ReporterloginComponent },
  { path: 'dashboard', component: DashboardComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporterRoutingModule { }
