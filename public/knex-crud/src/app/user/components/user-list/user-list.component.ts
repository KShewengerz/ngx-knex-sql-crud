import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/user/services/user.service';
import { User } from '@app/interfaces';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  headers: string[] = ['First Name', 'Last Name', 'Email Address', ''];
  users: User[] = [];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }
  
  fetchUsers(): void {
    this.userService.fetchUsers().subscribe(users => this.users = users);
  }
  
  editUser(id: string): void {
    console.log(id);
  }
  
  deleteUser(id: string): void {
    console.log(id);
  }
  

}
