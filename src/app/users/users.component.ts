import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { UserList } from '../model/user-list';
import { EditDeleteUserService } from '../services/edit-delete-user.service';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  createItem=false;
  userList: UserList[]=[];
  updatedDate='';
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
    this.userListService.getUserListDetail().subscribe(data=>{
      this.userList = data;
    });
  }
  /**
   * To edit and save data
   * @param userDetail 
   */
   onSave(userDetail: any){
    /** CALL SERVICE METHOD TO SAVE UPDATED DATA */
    let resultantData;
    this.editDeleteUserService.editUserList(this.userList, userDetail).subscribe(data=> {resultantData= data});
this.getUserList();
   
  }
  /**
   * Delete user by id
   * @param id , pass id
   */
  deleteUser(id: string): void{
    /** CALL SERVICE METHOD TO DELETE USER BY ID */
    this.editDeleteUserService.deleteUserById( id).subscribe();
    this.getUserList();
  }

  /**
   * 
   */
  enableCreateItem(){
    this.createItem = true;
  }

  disableCreateItem(){
    this.createItem = false;
  }
  saveNewEntery(){
    const date= moment().format('YYYY-MM-DD HH:mm:ss');
    const newUserEntery: UserList ={
    userId:  `${this.userList.length +1}`,
    firstName : 'firstName',
    middleName : '',
    lastName : 'lastName',
    email : 'email',
    phoneNumber : 0,
    role : 'role',
    address : '',
    createdOn : '',
    modifiedOn: date,
    isEdit:true,
    newEntery: true
  }
   this.userList.push(newUserEntery);
  }
}
