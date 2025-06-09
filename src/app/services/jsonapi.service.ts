import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/Users';

@Injectable({
  providedIn: 'root',
})
export class JsonapiService {
  apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
