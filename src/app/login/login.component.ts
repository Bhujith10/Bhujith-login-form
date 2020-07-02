import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { login } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        "username": new FormControl(null,Validators.required),
        "password": new FormControl(null,Validators.required)
      }
    )
  }

  onSubmit(details:login)
  {
    console.log(details);
  }

}
