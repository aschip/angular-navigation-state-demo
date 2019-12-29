import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public state = '';
  public state$: Observable<{ [key:string]: string }>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
    this.state$.subscribe((currentState : { [key:string]: string })=>{
      console.log(currentState);
      console.log(currentState.alarm);
      this.state= currentState.alarm;
    });
  }
}