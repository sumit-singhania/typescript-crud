import { Injectable } from '@angular/core';
import { UserList } from '../model/user-list';

@Injectable({
  providedIn: 'root'
})
export class EditDeleteUserService {

  constructor() { }

  /**
   * To update user
   * @param userList 
   * @param userDetail 
   */
  editUserList(userList: Array<UserList>, userDetail:UserList): Array<UserList>{
    for (let item of userList ) {
      if (item.userId === userDetail.userId){
        item.FirstName = userDetail.FirstName;
        item.MiddleName = userDetail.MiddleName ? userDetail.MiddleName: '',
        item.LastName = userDetail.LastName; 
        item.email = userDetail.email; 
        item.phoneNumber = userDetail.phoneNumber; 
        item.role = userDetail.role; 
        item.address = userDetail.address; 
        item.createdOn = userDetail.createdOn; 
        item.modifiedOn = userDetail.modifiedOn;
        item.isEdit=false;
      }
    }
    return userList;
  }

/**
 * To remove user from list
 * @param userList 
 * @param id 
 */
  deleteUserById(userList:Array<UserList>, id: string): Array<UserList>{
    userList = userList.filter( (item : any ) => {
      if(id!== item.userId){
        return item;
      }
    });
    return userList;
  }
  
}
