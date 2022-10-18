import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporterRoutingModule } from './reporter-routing.module';
import { ReporterloginComponent } from './reporterlogin/reporterlogin.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ReporterloginComponent,
    NewsFormComponent,
    SignupComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [

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
    MatListModule,

    NgbModule,
    MatPaginatorModule,
    MatSidenavModule,
    CommonModule,
    ReporterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    ReporterloginComponent,
    NewsFormComponent,
    SignupComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent]

})
export class ReporterModule { }
