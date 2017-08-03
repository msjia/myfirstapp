import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  userName = '';
  allowNewUser = false;
  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName(event: Event) {
    if ((<HTMLInputElement>event.target).value.length > 0) {
      this.allowNewUser = true;
    }
  }

  onAddUserName() {
    this.userName = '';
  }
}
