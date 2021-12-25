import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Player } from '../../classes/Player.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  players:Player[] = [];
  // totalMoney: Number = 100.0;

  constructor(public teamService:TeamService) {}

  ngOnInit(): void {
    this.players = this.teamService.getAllPlayers();
  }


}
