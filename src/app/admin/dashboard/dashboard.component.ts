import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';







@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  sideBarOpen = true;

  constructor () { }

  ngOnInit() { }


  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
