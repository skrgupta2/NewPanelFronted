import { Component } from '@angular/core';
import { AdminServiceService } from './admin/admin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  users: any;
  constructor (private service: AdminServiceService) {
    //   service.users().subscribe((data)=>{
    //   console.warn("data",data);

    //   this.users=data
    //   console.log(this.users);
    // });
  }
}
