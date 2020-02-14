import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnChanges {

  @Input() msgList;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    console.log(this.msgList);
  }
}
