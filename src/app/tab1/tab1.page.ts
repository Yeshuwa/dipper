import { Component ,ElementRef,ViewChild} from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  usersIndex:number;
  users:any;
  currentChoice:any;
  readSwipe: boolean;
  rightPeople: any = [];


  constructor(private gestureCtrl: GestureController) {
    this.readSwipe = true;
    this.gestureCtrl = gestureCtrl;
   this.users = [
     {
       name: "Issabella",
       sign: "Taurus",
       age: 19,
       city: "Los Angeles"
     },
     {
       name : "Yeshuwa",
       sign : "leo",
       age : 18,
       city: "Arkansas",

     },
     {
       name : "Jacky",
       sign : "Pisces",
      age: 45,
      city: "Fullerton"
     },
   ]
   this.usersIndex = 0;
   this.currentChoice = this.users[this.usersIndex];
  }
  @ViewChild('swipeContainer') swipeContainer: ElementRef;
  ngAfterViewChecked(){ 
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.swipeContainer.nativeElement,
      threshold: 15,
      gestureName: 'my-gesture',
      onMove: detail => this.onMove(detail),
      onEnd: detail => this.onEnd(detail)
    }, true);
    // The `true` above ensures that callbacks run inside NgZone.
    gesture.enable()

  }
  
  // swipe
  private onMove(detail) {
    const type = detail.type;
    const currentX = detail.currentX;
    const deltaX = detail.deltaX;
    const velocityX = detail.velocityX;
   
    //right
    if(velocityX > 1.4 && this.readSwipe){
      this.usersIndex = this.usersIndex + 1;
      this.currentChoice = this.users[this.usersIndex]
      console.log("Swiped Right")
      console.log(this.currentChoice)
      this.readSwipe = false;
      this.rightPeople.push(this.currentChoice)
      console.log(this.rightPeople)
    }
    //left
    else if(velocityX < -1.4 && this.readSwipe){
      
      this.usersIndex = this.usersIndex + 1;
      this.currentChoice = this.users[this.usersIndex]
      console.log(this.currentChoice)
      this.readSwipe = false;
      console.log("Swiped Left")
      
    }
  }
  private onEnd(detail){
    this.readSwipe = true;
  }
  
 
}