import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { UserList } from '../model/user-list';

@Injectable({
  providedIn: 'root'
})

export class EditDeleteUserService {

  constructor(private httpClient: HttpClient) { }



  /**
   * To update user
   * @param userList 
   * @param userDetail 
   */
    editUserList(userList: Array<UserList>, userDetail: UserList, edit?: boolean): Observable<UserList>{
      const data  = {
        firstName: userDetail.firstName,
        middleName: userDetail.middleName?  userDetail.middleName: '',
        lastName: userDetail.lastName, 
        email: userDetail.email, 
        phoneNumber: userDetail.phoneNumber, 
        role: userDetail.role, 
        address: userDetail.address, 
        createdOn: moment().format('YYYY-MM-DD HH:mm:ss'), 
        modifiedOn: moment().format('YYYY-MM-DD HH:mm:ss'),
        isEdit: false,
      }
      if (userDetail.newEntery) {

        return this.httpClient.post<UserList>('http://localhost:3000/user-lists',data);

      }
       
      return this.httpClient.put<UserList>(`http://localhost:3000/user-lists/${userDetail.userId}`,data);
  }

/**
 * To remove user from list
 * @param userList 
 * @param id 
 */
  deleteUserById(id: string): Observable<UserList>{
    return this.httpClient.delete<UserList>(`http://localhost:3000/user-lists/${id}`);
  }


  
}

function DateTransform() {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, { 
      configurable: false,
      get: () => {
        return moment(key.replace('T', ' '), 'YYYY-MM-DD HH:mm:ss').toDate() 
      }
    });
  }
}
