import { UpcomingPlayerComponent } from './upcoming-player/upcoming-player.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { PlayerJoinedComponent } from './player-joined/player-joined.component';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { SolutionsInputComponent } from './solutions-input/solutions-input.component';
import { GameRoundComponent } from './game-round/game-round.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'playerJoined/:roomId',
    component: PlayerJoinedComponent
  },
  {
    path: 'create-room',
    component: CreateRoomComponent
  },
  {
    path: 'upcoming-player',
    component: UpcomingPlayerComponent
  },
  {
    path: 'gameRoom/:roomId',
    component: GameRoomComponent
  },
  {
    path: 'solutions',
    component: SolutionsInputComponent
  },
  {
    path: 'gameRound',
    component: GameRoundComponent
  },
];
