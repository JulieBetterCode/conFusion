import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  leaders;
  errMess: String;

  constructor(private leaderService: LeaderService,
    private http: HttpClient,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders,
      errmess => this.errMess = <any>errmess);
  }

}
