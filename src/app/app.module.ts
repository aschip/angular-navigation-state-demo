import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent },
        { path: 'away', component: AwayComponent },
        { path: '**', redirectTo: 'home' }
      ]
    ) ],
  declarations: [ 
    AppComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
