import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameRoomComponent } from './game-room/game-room.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'gameRoom/:roomId',
    component: GameRoomComponent
  },
];
