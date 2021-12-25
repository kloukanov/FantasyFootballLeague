import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { TransfersListComponent } from './components/transfers-list/transfers-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamPitchComponent } from './components/team-pitch/team-pitch.component';
import { TeamService } from './services/team.service';
import { PlayerTransferListComponent } from './components/player-transfer-list/player-transfer-list.component';
import { TransferInfoComponent } from './components/transfer-info/transfer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TransfersListComponent,
    TeamListComponent,
    PlayerComponent,
    TeamPitchComponent,
    PlayerTransferListComponent,
    TransferInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TeamService], // global instance -> if wanted a instance for one component then add this to that component as a provider in the component devorator
  bootstrap: [AppComponent]
})
export class AppModule { }
