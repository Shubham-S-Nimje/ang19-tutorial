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

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

  getUserById(userId: string) {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  updateUserById(userId: string, user: User) {
    return this.http.put(`${this.apiUrl}/${userId}`, user);
  }
}
