import { Component, OnInit } from '@angular/core';
import { Player } from '../../classes/Player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  // player array
  public playerArray: Player[];

  // all player array
  allPlayers: Player[];

  constructor() { 

    this.playerArray = [];

    this.allPlayers = [{"name": 'De Gea', "id": 1},
                      {"name": 'Ronaldo', "id": 2},
                      {"name": 'Sancho', "id": 3},
                      {"name": 'Pogba', "id": 4},
                      {"name": 'Fernandes', "id": 5}
                    ];

  }

  ngOnInit(): void {
  }

  // helper function returns player object from specified array and id
  findPlayerWithID(array:Player[], id1:number):Player{
    return array.find(x => x.id === id1) as Player;
  }

  // adds a player to the user's team
  addPlayer(id:number){
    var p = this.findPlayerWithID(this.allPlayers, id);
    this.playerArray.push(p); // add player to current team
    
    this.allPlayers = this.allPlayers.filter(x => x.id !== id); // remove from all player list
  }

  // removes a player from the user's team
  removePlayer(id:number){
    var p = this.findPlayerWithID(this.playerArray, id);
    this.allPlayers.push(p); // add player to all player list
    
    this.playerArray = this.playerArray.filter(x => x.id !== id); // remove player from current team
  }

}
