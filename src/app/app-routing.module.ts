import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TrackMatchComponent } from './track-match/track-match.component';
import { AboutComponent } from './about/about.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'track-match',
    component: TrackMatchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'teams-list',
    component: TeamsListComponent
  },
  {
    path: 'team-detail/:idTeam',
    component: TeamDetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
