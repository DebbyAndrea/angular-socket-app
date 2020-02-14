import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { GetUserDetailsComponent } from './components/get-user-details/get-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    UserInputComponent,
    GetUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
