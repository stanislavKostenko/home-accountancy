import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getUserByEmail(email: string): Observable<UserInterface> {
    return this.http.get<any>(`${this.apiUrl}/users?email=${email}`)
      .pipe(map((response) => {
        return response.map((data: UserInterface[]) => {
          return data;
        });
      }));
  }

  createNewUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<any>(`${this.apiUrl}/users`, user)
      .pipe(map((response) => {
        return response;
      } ));

  }
}
