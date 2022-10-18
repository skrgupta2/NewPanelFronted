import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewspageComponent } from './newspage/newspage.component';

const routes: Routes = [{path:'newspanel',component:NewspageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPanelRoutingModule { }
