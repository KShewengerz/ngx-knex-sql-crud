import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '@app/interfaces';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() users: User[] = [];
  @Output() delete: EventEmitter<{string, number}> = new EventEmitter<{string, number}>();
  @Output() edit: EventEmitter<User> = new EventEmitter<User>();
  
  headers: string[] = ['First Name', 'Last Name', 'Email Address', ''];
  
  constructor() { }
  
}
