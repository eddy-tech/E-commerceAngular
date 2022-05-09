import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstname: string = '';
  names: string[] = ['Thomas'];

  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  constructor() {}

  ngOnInit(): void {}

  handleSave() {
    if (this.firstname) {
      this.names.push(this.firstname);
      this.firstname = '';
    }
  }

  handleDelete(index: number) {
    if (index >= 0) {
      this.names.splice(index, 1);
    }
  }

  handleUpdate(index: number) {
    if (index >= 0) {
      const name = this.names[index];
      this.names.splice(index, 1);
      this.firstname = name;
    }
  }

  handleSubmit() {
    console.log('user:', this.user);
  }
}
