import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-reporterlogin',
  templateUrl: './reporterlogin.component.html',
  styleUrls: ['./reporterlogin.component.css']
})
export class ReporterloginComponent implements OnInit {

  loginForm: FormGroup;


  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor (
    private formBuilder: FormBuilder, private service: AdminServiceService, private router: Router, private toaster: ToastrService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, [Validators.required, Validators.min(3)]]
    });
  }

  submit() {

    if (!this.loginForm.valid) {
      return;
    }
    debugger
    console.log(this.loginForm.value);
    console.log(this.loginForm.get('email').value);
    let user = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
      newsUserTypeId: 2
    };

    debugger
    this.service.UserCredentials(user).subscribe((result) => {
      debugger
      console.log(result)

      if (result.status == "success") {
        this.router.navigateByUrl('/reporter/dashboard');
      }
      else {
        debugger
        this.toaster.error(result.status, 'Error');
      }
    }
    );
  }
}
