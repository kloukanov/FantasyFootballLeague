import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/classes/Player.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-pitch',
  templateUrl: './team-pitch.component.html',
  styleUrls: ['./team-pitch.component.css']
})
export class TeamPitchComponent implements OnInit {

  teamPlayers = [] as any;

  constructor(private teamService:TeamService) {}

  ngOnInit(): void {
    this.teamPlayers = this.teamService.getPlayers();
  }

  addPlayer(player: Player){
    this.teamService.addToTeam(player);
  }

}
