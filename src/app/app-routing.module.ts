import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path:"",component:SearchComponent},
  { path:"chat-dialog",component:ChatDialogComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  ChatDialogComponent
];
