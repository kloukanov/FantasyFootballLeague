import { Injectable } from '@angular/core';
import { Player } from '../classes/Player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private totalMoney: number = 100.0;

  private formation: string = "one";

  private players:Player[] = [
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"gk", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"gk", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"df", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"df", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"df", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"df", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"df", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"mf", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"mf", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"mf", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"mf", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"mf", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"fw", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"fw", price: 0.0}, 
    {"name": 'Empty', "id": 0, "isSelected": false, points: 0, position:"fw", price: 0.0}
                              ];

  private allPlayers:Player[] = [
    {"name": 'De Gea', "id": 1, "isSelected": false, points: 0, position:"gk", price: 5.0}, 
    {"name": 'Pickford', "id": 2, "isSelected": false, points: 0, position:"gk", price: 4.0}, 
    {"name": 'Maguire', "id": 11, "isSelected": false, points: 0, position:"df", price: 5.0}, 
    {"name": 'Cancelo', "id": 12, "isSelected": false, points: 0, position:"df", price: 6.0}, 
    {"name": 'James', "id": 13, "isSelected": false, points: 0, position:"df", price: 6.0}, 
    {"name": 'Alexander-Arnold', "id": 14, "isSelected": false, points: 0, position:"df", price: 7.0}, 
    {"name": 'Lindelof', "id": 18, "isSelected": false, points: 0, position:"df", price: 4.5}, 
    {"name": 'Rudiger', "id": 15, "isSelected": false, points: 0, position:"df", price: 5.5},
    {"name": 'Sancho', "id": 3, "isSelected": false, points: 0, position:"mf", price: 7.0}, 
    {"name": 'Pogba', "id": 4, "isSelected": false, points: 0, position:"mf", price: 7.0}, 
    {"name": 'Fernandes', "id": 5, "isSelected": false, points: 0, position:"mf", price: 11.0}, 
    {"name": 'Silva', "id": 10, "isSelected": false, points: 0, position:"mf", price: 8.0},
    {"name": 'Saka', "id": 7, "isSelected": false, points: 0, position:"mf", price: 6.0}, 
    {"name": 'Lukaku', "id": 8, "isSelected": false, points: 0, position:"fw", price: 11.0}, 
    {"name": 'Kane', "id": 9, "isSelected": false, points: 0, position:"fw", price: 12.0}, 
    {"name": 'Ronaldo', "id": 6, "isSelected": false, points: 0, position:"fw", price: 12.5}
                                ];

  constructor() {   }

  getAllPlayers(){
    return this.allPlayers;
  }

  getPlayers(){
    return this.players;
  }
  
  getTotalMoney(){
    return this.totalMoney;
  }

  getFormation(){
    return this.formation;
  }

  setFormation(frmt: string){
    this.formation = frmt;
  }

  addToTeam(player: Player){
    // check if player is already in the team
    if(this.players.indexOf(player) !== -1){
      return;
    }

    for(let i = 0; i < this.players.length; i++){
      if(this.players[i].name == "Empty" && this.players[i].position == player.position){
        this.players[i] = player;
        this.players[i].isSelected = true;
        this.subtractFromTotalMoney(player.price);
        return;
      }
    }
  }

  removeFromTeam(player: Player){
    if(player.name != "Empty"){
      this.addToTotalMoney(player.price);
      this.players[this.players.indexOf(player)].isSelected = false;
      let p = new Player();
      p.position = this.players[this.players.indexOf(player)].position;
      this.players[this.players.indexOf(player)] = p;
    }
  }

  removeAllPlayers(){
    for(let i = 0; i < this.players.length; i++){
      this.removeFromTeam(this.players[i]);
    }
  }


  private subtractFromTotalMoney(playerPrice: number){
    this.totalMoney = this.totalMoney - playerPrice;
  }

  private addToTotalMoney(playerPrice: number){
    this.totalMoney = this.totalMoney + playerPrice;
  }

}
