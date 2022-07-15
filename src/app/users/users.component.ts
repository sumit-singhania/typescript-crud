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
  loadData(){
   
    this.IsLoading = true;
  }
  onEdit(){
    this.Edit= true;
  }
  onSave(){

  }
  onCancel(){
    this.Edit= false;
  }
  ngOnInit(): void {
   this.getUserList();
  }
  getUserList(): void{
    this.userList = this.userListService.getUserListDetail();
  }
  deleteUser(id: string): void{
    this.userList = this.editDeleteUserService.deleteUserById(this.userList, id);
  }
}
