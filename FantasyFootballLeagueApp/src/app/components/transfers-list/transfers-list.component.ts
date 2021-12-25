import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from "../../classes/Player.model";
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.css']
})
export class TransfersListComponent implements OnInit {

  transferPlayers:Player[] = [];

  constructor(private teamService:TeamService) {}

  ngOnInit(): void {
    this.transferPlayers = this.teamService.getAllPlayers();
  }

  addPlayer(player: Player){
    this.teamService.addToTeam(player);
  }

}
