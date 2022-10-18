import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NewsGridComponent } from './news-grid/news-grid.component';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { AddReporterComponent } from './add-reporter/add-reporter.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { NewsAddDialogComponent } from './news-add-dialog/news-add-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    AdminloginComponent,
    DashboardComponent,
    NewsGridComponent,
    CategoryCrudComponent,
    AddReporterComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    NewsAddDialogComponent,
    

  ],
  imports: [
    MatDialogModule,
    NgbModule,
    MatPaginatorModule,
    MatSidenavModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule

  ], exports: [AdminloginComponent,
    DashboardComponent,
    NewsGridComponent,
    CategoryCrudComponent,
    AddReporterComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    NewsAddDialogComponent]
})
export class AdminModule { }
