import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-user-chats',
  templateUrl: './single-user-chats.page.html',
  styleUrls: ['./single-user-chats.page.scss'],
})
export class SingleUserChatsPage implements OnInit {
  public messages = [];

  constructor() {}

  ngOnInit() {
    
  }
  

  sendMessage() {
    
  
   let message = (<HTMLInputElement>document.getElementById("messageSent")).value;
   console.log(message);
  this.messages.push(message);
  
   (<HTMLInputElement>document.getElementById("messageSent")).value = "";
  }
}
