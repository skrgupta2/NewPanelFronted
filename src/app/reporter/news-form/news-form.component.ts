import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { User } from  '../../models/User';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {
  profileForm:any;
  newsForm: any;

  constructor(private router: Router,  ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      ReporterId:new FormControl(''),
      NewsCategoryId:new FormControl(''),
      Title: new FormControl(''),
      Subtitle: new FormControl(''),
      Description: new FormControl(''),
      CreatedBy: new FormControl(''),
      Image:  new FormControl(''),
    });

  }

}
