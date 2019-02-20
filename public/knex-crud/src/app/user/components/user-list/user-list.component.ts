import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '@app/user/services/user.service';

import { User } from '@app/interfaces';
import { HttpStatusCode } from '@app/enums';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() users: User[] = [];
  @Output() delete: EventEmitter<{string, number}> = new EventEmitter<{string, number}>();
  
  headers: string[] = ['First Name', 'Last Name', 'Email Address', ''];
  
  constructor(private userService: UserService) { }

  editUser(id: string): void {
    console.log(id);
  }
  
}
