import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// // import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
 
// // Send unauthorized users to login
// const redirectUnauthorizedToLogin = () =>
//   redirectUnauthorizedTo(['/']);

//   // Automatically log in users
// const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // ...canActivate(redirectLoggedInToChat),
  },  {
    path: 'single-user-chats',
    loadChildren: () => import('./single-user-chats/single-user-chats.module').then( m => m.SingleUserChatsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

  // {
  //   path: 'chat',
  //   ...canActivate(redirectUnauthorizedToLogin),
  //   loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
