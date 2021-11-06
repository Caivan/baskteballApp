import { Injectable } from '@angular/core';

const teams = [
  {
    name: 'Lakers',
    // eslint-disable-next-line max-len
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
    description: 'LA Team',
  },
  {
    name: 'Bulls',
    imagePath: 'https://s1.ticketm.net/dam/a/172/074c3535-bfcf-49e2-a0f9-03d947862172_1340171_TABLET_LANDSCAPE_LARGE_16_9.jpg',
    description: 'Chicago Team',
  },
  {
    name: 'Heats',
    imagePath: 'https://logos-marcas.com/wp-content/uploads/2020/06/Miami-Heat-logo.png',
    description: 'Miami Team',
  },
];

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  basketballTeams: Array<any>;

  constructor() { }

  getAllTeams() {
    return this.basketballTeams = teams;
  }

  getTeamById(idTeam) {
    console.log(idTeam);
  }
}
