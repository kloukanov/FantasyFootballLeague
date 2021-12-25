import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/classes/Player.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-transfer-list',
  templateUrl: './player-transfer-list.component.html',
  styleUrls: ['./player-transfer-list.component.css']
})
export class PlayerTransferListComponent implements OnInit {

// player object passed from parent
@Input()
playerItem: Player = new Player(0, "empty");
selected: Boolean = false;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  addPlayer(player: Player){

    if(this.playerItem.isSelected){
      this.teamService.removeFromTeam(player);
    }else{
      this.teamService.addToTeam(player);
    }

  }

}
