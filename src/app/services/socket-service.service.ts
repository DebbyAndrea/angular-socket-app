import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket = io("http://localhost:8000");
  
  msgData = {
    message:"",
    id:""
  }

  constructor() { }

  public getUserName(userName: string) {
    this.socket.emit('getUserName', userName, this.socket.id);
  }

  public initConnection(userName: string, roomName?: string){
    this.socket.emit('join', userName, roomName);
  }

  public sendMessage(message) {
    this.msgData.message = message;
    this.msgData.id = this.socket.id;
    console.log("Message: "+ message)
    console.log("Socket: " + this.socket.id);

    // this.socket.emit('join', {name: "temp",data:message});
    this.socket.emit("on-send", this.msgData);
  }

  public getMessage() {
    return Observable.create((observer) => {
      this.socket.on("on-send", (message) => {
        console.log(message);
        
        observer.next(message);
      })
    })
  }

}
