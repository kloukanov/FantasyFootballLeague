import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from "../../classes/Player";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  // shared player array from team component
  @Input() playerArrayInChild: any;
  // label of the add/remove button
  public buttonLabelInChild: string;

  // event emitter for removePlayer functionality
  @Output()
  removePlayerEvent = new EventEmitter<number>();

  constructor() {
    // sets the add/remove button to specified value
    this.buttonLabelInChild = "remove";
   }

  ngOnInit(): void {
  }

  // initiates event emitter to remove player from user's current list 
  removePlayer(id:number)
  {
    this.removePlayerEvent.next(id);
  }

}
