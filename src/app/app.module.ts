import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SolutionsInputComponent } from './solutions-input/solutions-input.component';

import { routes } from './app.routes';

import { MockProvider } from './API/MockProvider';
import { GameRoomComponent } from './game-room/game-room.component';
import { PlayerManagerService } from './player-manager/player-manager.service';
import { GameRoomManager } from './game-room/game-room-manager.service';
import { HeaderComponent } from './header/header.component';
import { GameRoundComponent } from './game-round/game-round.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SolutionsInputComponent,
    GameRoomComponent,
    GameRoundComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    MockProvider,
    PlayerManagerService,
    GameRoomManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
