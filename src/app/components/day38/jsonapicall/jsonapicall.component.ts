import { Component } from '@angular/core';
import { JsonapiService } from '../../../services/jsonapi.service';
import { User } from '../../../interfaces/Users';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-jsonapicall',
  imports: [FormsModule, NgIf],
  templateUrl: './jsonapicall.component.html',
  styleUrl: './jsonapicall.component.css',
})
export class JsonapicallComponent {
  usersList: User[] = [];
  userForm: any;
  userUpdateForm: any;
  selectedUser: User | undefined;
  constructor(private userApiService: JsonapiService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userApiService.getUsersList().subscribe((data: User[]) => {
      this.usersList = data;
      // console.log(data);
    });
  }

  addUser(user: User) {
    this.userApiService.addUser(user).subscribe((data) => {
      if (data) this.getUser();
      // console.log(data);
    });
    // console.log(user);
  }

  deleteUser(userId: string) {
    // console.log(userId);
    this.userApiService.deleteUser(userId).subscribe((data) => {
      if (data) this.getUser();
      // console.log(data);
    });
  }

  updateUser(userId: string) {
    // console.log(userId);
    this.userApiService.getUserById(userId).subscribe((data) => {
      this.selectedUser = data;
      // console.log(data);
    });
  }

  updateUserById(updatedUser: User) {
    if (!this.selectedUser) return;

    // console.log(updatedUser);
    this.userApiService
      .updateUserById(this.selectedUser.id, updatedUser)
      .subscribe((data) => {
        if (data) {
          this.getUser();
          this.selectedUser = undefined;
        }
        // console.log(data);
      });
  }

  closePopup() {
    this.selectedUser = undefined;
  }
}
