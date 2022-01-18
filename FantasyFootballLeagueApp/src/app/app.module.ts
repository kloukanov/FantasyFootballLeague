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
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { TransferSearchComponent } from './components/transfer-search/transfer-search.component';
import { HomeComponent } from './components/home/home.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TransfersListComponent,
    TeamListComponent,
    PlayerComponent,
    TeamPitchComponent,
    PlayerTransferListComponent,
    TransferInfoComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    TransferSearchComponent,
    HomeComponent,
    MyTeamComponent,
    LeaguesComponent,
    FixturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [TeamService], // global instance -> if wanted a instance for one component then add this to that component as a provider in the component devorator
  bootstrap: [AppComponent]
})
export class AppModule { }
