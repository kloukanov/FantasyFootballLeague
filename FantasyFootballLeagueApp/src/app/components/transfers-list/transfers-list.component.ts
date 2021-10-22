import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from "../../classes/Player";

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.css']
})
export class TransfersListComponent implements OnInit {

  // shared player array from team component
  @Input() playerArrayInChild: any;
  // label of the add/remove button
  public buttonLabelInChild: string;

  // event emitter for addPlayer functionality
  @Output()
  addPlayerEvent = new EventEmitter<number>();

  constructor() {
    // sets the add/remove button to specified value
    this.buttonLabelInChild = "add";
   }

  ngOnInit(): void {
  }

  // initiates event emitter to add player to user's current list 
  addPlayer(id:number)
  {
    this.addPlayerEvent.next(id);
  }

}
