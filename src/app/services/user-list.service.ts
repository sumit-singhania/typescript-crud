import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from '../model/user-list';
import { UserRoleEnums } from '../model/user-role-enums';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private httpClient: HttpClient) { }
/**
 * To return static data for user list
 */
  getUserListDetail(): Observable<UserList[]>{
    const userlist =this.httpClient.get<UserList[]>('http://localhost:3000/user-lists');
    return userlist;
  }
}
