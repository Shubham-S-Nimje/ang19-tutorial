import { Component } from '@angular/core';
import { JsonapiService } from '../../../services/jsonapi.service';
import { User } from '../../../interfaces/Users';

@Component({
  selector: 'app-jsonapicall',
  imports: [],
  templateUrl: './jsonapicall.component.html',
  styleUrl: './jsonapicall.component.css',
})
export class JsonapicallComponent {
  usersList: User[] = [];
  constructor(private userApiService: JsonapiService) {}

  ngOnInit() {
    this.userApiService.getUsersList().subscribe((data: User[]) => {
      this.usersList = data;
      console.log(data);
    });
  }
}
