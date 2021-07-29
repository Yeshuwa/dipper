import { Component, OnInit } from '@angular/core';
import { chatSystem } from '../shared/chat';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{

  public listOfFriends = chatSystem.profile.friends;

  constructor() {}

  ngOnInit() {
    console.log(this.listOfFriends[0]);
    
  }

  iGotClicked() {
    console.log("I was Perssed!");
}


}
