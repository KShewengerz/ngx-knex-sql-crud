import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/user/services/user.service';

import { User } from '@app/interfaces';
import {HttpStatusCode} from '@app/enums';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  
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

}
