import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from "./chat/chat.module";
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ChatModule,
    MatFormFieldModule,
    DragDropModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
