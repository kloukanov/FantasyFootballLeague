import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { TransfersListComponent } from './components/transfers-list/transfers-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TransfersListComponent,
    TeamListComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
