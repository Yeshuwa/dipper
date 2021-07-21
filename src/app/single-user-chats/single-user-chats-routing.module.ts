import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleUserChatsPage } from './single-user-chats.page';

const routes: Routes = [
  {
    path: '',
    component: SingleUserChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleUserChatsPageRoutingModule {}
