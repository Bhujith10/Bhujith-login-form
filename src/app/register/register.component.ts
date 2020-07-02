import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        "deptName": new FormControl(null, Validators.required),
        "empId": new FormControl(null, Validators.required),
        "emailId": new FormControl(null, Validators.required),
        "loc": new FormControl(null, Validators.required),
        "empName": new FormControl(null, Validators.required),
        "gender": new FormControl(null, Validators.required),
        "project": new FormControl(null, Validators.required),
        "contact": new FormControl(null, Validators.required),
      }
    );
  }

}
