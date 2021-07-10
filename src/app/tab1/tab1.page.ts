import { Component ,ElementRef,ViewChild} from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
 
 
  constructor(private gestureCtrl: GestureController) {
   this.gestureCtrl = gestureCtrl;
  }
  @ViewChild('swipeContainer') swipeContainer: ElementRef;
  ngAfterViewChecked(){ 
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.swipeContainer.nativeElement,
      threshold: 15,
      gestureName: 'my-gesture',
      onMove: detail => this.onMove(detail)
    }, true);
    // The `true` above ensures that callbacks run inside NgZone.
    gesture.enable()

  }
  
  
  private onMove(detail) {
    const type = detail.type;
    const currentX = detail.currentX;
    const deltaX = detail.deltaX;
    const velocityX = detail.velocityX;
  
    if(velocityX > 0){
      console.log("Swiped Right")
    }
    else if(velocityX < 0){
      console.log("Swiped Left")
    }
  }
 
}