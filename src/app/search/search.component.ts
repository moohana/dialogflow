import { Component, OnInit } from '@angular/core';
import { ChatDialogComponent } from '../chat/chat-dialog/chat-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  constructor(private router:Router,) { }

  ngOnInit() {
  }
  opendialog() {
    this.router.navigateByUrl("chat-dialog");
    
  
  }

}
