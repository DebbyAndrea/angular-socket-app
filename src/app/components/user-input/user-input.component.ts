import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  @Output() sendMsg = new EventEmitter();
  userMsg = "";

  constructor() { }

  ngOnInit(): void {

  }

  onSend() {
    if(this.userMsg !== "") {
      this.sendMsg.emit(this.userMsg);
      this.userMsg="";
    }
  }

}
