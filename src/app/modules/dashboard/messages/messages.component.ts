import { Component, OnInit } from '@angular/core';
import { ChatDetails, MessageListDB } from 'src/app/models/dummy_db';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  userList = MessageListDB;
  chat = ChatDetails;
  constructor() {}

  ngOnInit(): void {}
}
