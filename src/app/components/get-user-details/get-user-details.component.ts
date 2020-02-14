import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.css']
})
export class GetUserDetailsComponent implements OnInit {

  @Output() userData = new EventEmitter();
  userName: string;
  receiverName: string;
  finalReceiverName: string;
  sendUserData = {
    userName:"",
    finalReceiverName:""
  }

  constructor() { }

  ngOnInit(): void { }

  getReceiverOption = new FormGroup({
    receiver: new FormControl('')
  });

  getReceiverName = new FormGroup({
    selectreceiverName: new FormControl('')
  })

  onSubmit() {
    if (this.getReceiverOption.value.receiver === "New") {
      this.finalReceiverName = this.receiverName;
    } else {
      this.finalReceiverName = this.getReceiverName.value.selectreceiverName;
    }

    this.sendUserData.userName = this.userName;
    this.sendUserData.finalReceiverName = this.finalReceiverName;

    this.userData.emit(this.sendUserData)

  }
  

}
