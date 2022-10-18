import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPanelRoutingModule } from './news-panel-routing.module';
import { NewspageComponent } from './newspage/newspage.component';


@NgModule({
  declarations: [
    NewspageComponent
  ],
  imports: [
    CommonModule,
    NewsPanelRoutingModule
  ],
  exports:[NewspageComponent]
})
export class NewsPanelModule { }
