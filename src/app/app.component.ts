import { Component } from '@angular/core';
import { SocketService } from './services/socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socket-app';
  msgList: string[];
  userName = 0;
  obj = {
    userName: "",
    receiverName:"",
    msg:""
  }

  constructor(private socket:SocketService) {}

  getUserData(data) {
    console.log("User data: " + JSON.stringify(data));
    this.userName = 1;
    this.obj.userName = data.userName;
    this.obj.receiverName = data.finalReceiverName;
    this.socket.getUserName(data.userName);
  }

  onSend(event) {
    this.obj.msg = event;
    this.socket.sendMessage(this.obj);
  }

  ngOnInit() {
    this.msgList = [];
    this.socket.getMessage().subscribe((message) => {
      this.msgList.push(message.message);
      console.log("from server"+message)
    })
  }
}
