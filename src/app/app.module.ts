import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { FormsModule } from '@angular/forms';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    FlyingHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
