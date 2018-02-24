import { Login } from './login';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  login: Login = new Login;
  public task;
  public firebase;
  userDetailsForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder, private http: Http, private angularFire: AngularFireDatabase) {

    this.userDetailsForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });

    this.firebase = this.angularFire.list('/tasks');
    console.log(this.getTask());
  }
  saveEntity() {
    this.task = this.userDetailsForm.value;
    console.log(this.userDetailsForm.value)
    if (this.task) {
      this.firebase.push({
        task: this.task,
        createdDate: (new Date()).getTime()
      });
    }
  }
  getTask() {
    return this.angularFire.list('/tasks').valueChanges();
  }
  ngOnInit() {
    this.getTask().subscribe(res => {
        this.task = res;
        console.log(this.task)
    });
}
}
