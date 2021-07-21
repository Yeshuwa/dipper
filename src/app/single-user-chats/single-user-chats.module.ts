import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleUserChatsPageRoutingModule } from './single-user-chats-routing.module';

import { SingleUserChatsPage } from './single-user-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleUserChatsPageRoutingModule
  ],
  declarations: [SingleUserChatsPage]
})
export class SingleUserChatsPageModule {}
