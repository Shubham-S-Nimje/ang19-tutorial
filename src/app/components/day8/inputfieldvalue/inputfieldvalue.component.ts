import { Component } from '@angular/core';

@Component({
  selector: 'app-inputfieldvalue',
  imports: [],
  templateUrl: './inputfieldvalue.component.html',
  styleUrl: './inputfieldvalue.component.css',
})
export class InputfieldvalueComponent {
  userName: string = '';
  email: string = '';

  getName(event: Event): void {
    this.userName = (event.target as HTMLInputElement).value;
    // console.log(this.userName);
  }

  setName(): void {
    this.userName = 'kartik';
    alert(`Username is : ${this.userName}`);
  }

  onButtonClick(): void {
    if (this.userName) {
      alert(`Username is : ${this.userName}`);
    }
  }

  getEmail(val: string): void {
    this.email = val;
    console.log(this.email);
  }

  setEmail(): void {
    this.email = 'shubham@gmail.com';
    console.log(this.email);
  }
}
