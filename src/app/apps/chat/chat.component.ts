import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  asideToggler() {
    document.querySelector('.mail-sidebar,.chat-list-wrapper').classList.toggle('menu-open');
  }

  constructor() { }

  ngOnInit() {
  }

}
