import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/classes/Player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  // player object passed from parent
  @Input()
  playerItem: Player = new Player;
  // label of the add/remove button passed from the parent
  @Input()
  buttonAction: string = "";

  // event emitter for addPlayer functionality
  @Output()
  addPlayerEvent = new EventEmitter<number>();
  // event emitter for removePlayer functionality
  @Output()
  removePlayerEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // event emitter to add player to user's current list 
  addPlayer(): void {
    this.addPlayerEvent.next(this.playerItem.id);
  }

  // event emitter to remove player from user's current list 
  removePlayer(): void {

    this.removePlayerEvent.next(this.playerItem.id);
  }

  // helper function to check if the button label is set to add/remove
  isAdd():boolean{
    return this.buttonAction === "add";
  }

}
