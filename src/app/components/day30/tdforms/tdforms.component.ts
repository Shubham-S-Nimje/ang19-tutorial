import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tdforms',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './tdforms.component.html',
  styleUrl: './tdforms.component.css',
})
export class TdformsComponent {
  userDetails: any;
  addDetails(val: NgForm) {
    this.userDetails = val;
    // console.log(this.userDetails);
  }
}
