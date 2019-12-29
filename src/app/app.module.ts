import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AwayComponent } from './away/away.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "away", component: AwayComponent },
      { path: "**", redirectTo: "home" }
    ])
  ],
  declarations: [AppComponent, HomeComponent, AwayComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
