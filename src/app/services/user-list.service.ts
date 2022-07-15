import { Injectable } from '@angular/core';
import { UserList } from '../model/user-list';
import { UserRoleEnums } from '../model/user-role-enums';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }
/**
 * 
 */
  getUserListDetail(): UserList[]{
    const userList: UserList[]= [
      {
      userId: '1',
      FirstName: 'Sumit',
      MiddleName:'na',
      LastName: 'Singhania', 
      email: 'sumitsinghania68@gmail.com', 
      phoneNumber: 7508799790, 
      role: UserRoleEnums.subscriber, 
      address: 'na', 
      createdOn: '20/02/2020', 
      modifiedOn: '20/02/2020',
      isEdit: false
      },
      {
      userId: '2',
      FirstName: 'Sumit',
      MiddleName:'na',
      LastName: 'Singhania', 
      email: 'sumitsinghania68@gmail.com', 
      phoneNumber: 7508799790, 
      role: UserRoleEnums.admin, 
      address: 'na', 
      createdOn: '20/02/2020', 
      modifiedOn: '20/02/2020',
      isEdit: false
      }];
    return userList;
  }
}
