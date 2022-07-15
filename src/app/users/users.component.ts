import { Component, OnInit } from '@angular/core';
import { UserList } from '../model/user-list';
import { EditDeleteUserService } from '../services/edit-delete-user.service';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Edit=false;
  userList: UserList[]=[];
 
  constructor(private userListService: UserListService, private editDeleteUserService: EditDeleteUserService) { }
  IsLoading = false;
  /**
   * To load data
   */
  loadData(){
   
    this.IsLoading = true;
  }
  /**
   * Allow edit operation
   */
  onEdit(user:UserList){
    user.isEdit= true;
  }

  /**
   * revert back changes
   */
  onCancel(user: UserList){
    user.isEdit= false;
  }
  ngOnInit(): void {
   this.getUserList();
  }
  /**
   * get list of users
   */
  getUserList(): void{
    /** CALL SERVICE METHOD TO GET LIST OF USER */
    this.userList = this.userListService.getUserListDetail();
  }
  /**
   * To edit and save data
   * @param userDetail 
   */
   onSave(userDetail: any){
    /** CALL SERVICE METHOD TO SAVE UPDATED DATA */
    this.userList = this.editDeleteUserService.editUserList(this.userList, userDetail);
  }
  /**
   * Delete user by id
   * @param id , pass id
   */
  deleteUser(id: string): void{
    /** CALL SERVICE METHOD TO DELETE USER BY ID */
    this.userList = this.editDeleteUserService.deleteUserById(this.userList, id);
  }
}
