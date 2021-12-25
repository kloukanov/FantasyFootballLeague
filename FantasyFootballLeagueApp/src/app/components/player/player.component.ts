import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/classes/Player.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  // player object passed from parent
  @Input()
  playerItem: Player = new Player(0, "empty");
  // label of the add/remove button passed from the parent
  @Input()
  buttonAction: string = "";
  
  // default player name to empty
  // playerName: string = "Empty";

  // event emitter for addPlayer functionality
  @Output()
  addPlayerEvent = new EventEmitter<number>();
  // event emitter for removePlayer functionality
  @Output()
  removePlayerEvent = new EventEmitter<number>();

  constructor(private teamService: TeamService) { }

  removePlayer(player: Player){
    this.teamService.removeFromTeam(player);
  }


  ngOnInit(): void {

    // check if player name has been populated and set

    // if(this.playerItem.name != undefined){
    //   this.playerName = this.playerItem.name;
    // }
    

  }

  // event emitter to add player to user's current list 
  addPlayer(): void {
    this.addPlayerEvent.next(this.playerItem.id);
  }


  // helper function to check if the button label is set to add/remove
  isAdd():boolean{
    return this.buttonAction === "add";
  }

}
