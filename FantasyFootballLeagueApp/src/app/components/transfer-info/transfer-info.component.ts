import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-transfer-info',
  templateUrl: './transfer-info.component.html',
  styleUrls: ['./transfer-info.component.css']
})
export class TransferInfoComponent implements OnInit {

  constructor(public teamService: TeamService) { }

  ngOnInit(): void {
  }

  resetTeam(){
    // think of a different way to reset
    this.teamService.removeAllPlayers();

  }

}
