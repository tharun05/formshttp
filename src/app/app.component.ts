import { Login } from './login';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder,Validators, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  login: Login = new Login;

  userDetailsForm:FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private formBuilder:FormBuilder){
  
    this.userDetailsForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'password': ['',  Validators.compose([Validators.required, Validators.minLength(5)])]
     });
    console.log(this.login)
  }
}
