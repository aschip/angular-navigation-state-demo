import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-away',
  templateUrl: './away.component.html',
  styleUrls: ['./away.component.css']
})
export class AwayComponent implements OnInit {
  public state = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public navigate(event: Event) {
    event.preventDefault();

    this.router.navigate(['home'], { state: { alarm: 'off' } })
  }

  ngOnInit() {
    this.state = window.history.state.alarm;
  }
}