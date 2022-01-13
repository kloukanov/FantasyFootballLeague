import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LeaguesComponent } from './components/leagues/leagues.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'transfers', component: TeamComponent },
  { path: '', component: HomeComponent },
  { path: 'fixtures', component: FixturesComponent },
  { path: 'myteam', component: MyTeamComponent },
  { path: 'leagues', component: LeaguesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }