import { Component, OnInit } from '@angular/core';

import {UserService} from '@app/user/services/user.service';

import {userModels} from '@app/user/components/user-form/user-form.fields';

import {User} from '@app/interfaces';
import {HttpStatusCode} from '@app/enums';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  editUser: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }
  
  fetchUsers(): void {
    this.userService
      .fetchUsers()
      .subscribe(users => this.users = users);
  }
  
  deleteUser({ id, index }): void {
    this.userService
      .deleteUser(id)
      .subscribe(status => status === HttpStatusCode.NO_CONTENT ? this.users.splice(index, 1) : null);
  }
  
  saveUser(user: User): void {
    const action = user.id ? 'put' : 'post';
    
    this.userService.saveUser(action, user).subscribe(status => {
      this.editUser = userModels;
      
      status === HttpStatusCode.CREATED ? this.users.push(user) : this.users.map(u => u.id === user.id ? user : u);
    });
  }

}
