import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
})
export class TeamDetailComponent implements OnInit {

  team: any;

  constructor(private route: ActivatedRoute, private teamService: TeamsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe (
      (params) => {
        const idTeam =  params.get('idTeam');
        this.team = this.teamService.getTeamById(idTeam);
      }
    );
  }

}
