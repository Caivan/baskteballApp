import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {

  teams: any;

  constructor(private teamsService: TeamsService, private router: Router) {
      this.teams = this.teamsService.getAllTeams();
  }

  ngOnInit() {}

  showDetail(index){
    this.router.navigate(['/team-detail', index]);
  }
}
