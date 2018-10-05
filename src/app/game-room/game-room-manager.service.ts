import { Injectable } from '@angular/core';
import { IPlayer } from '../types/player/IPlayer';
import { IGameRoom } from '../types/game/IGameRoom';

@Injectable({
  providedIn: 'root'
})
export class GameRoomManager {

  currentGameRoom: IGameRoom = {
    id: '',
    players: []
  };

  constructor() { }

  getRoom(gameRoomId: string): IGameRoom {

    this.currentGameRoom = {
      id: gameRoomId,
      players: this.getPlayers(gameRoomId)
    };

    return this.currentGameRoom;
  }

  getPlayers(gameRoomId: string): IPlayer[] {
    return [
      {
        id: 1,
        name: 'Xan',
        avatar: 'http://3.bp.blogspot.com/-30_NgKLPsFw/UJFXfwx6ZRI/AAAAAAAAAP8/6mnkGBm7tpU/s1600/imagesCA3K09KT.jpg'
      },
      {
        id: 2,
        name: 'Petre',
        avatar: 'http://3.bp.blogspot.com/-30_NgKLPsFw/UJFXfwx6ZRI/AAAAAAAAAP8/6mnkGBm7tpU/s1600/imagesCA3K09KT.jpg'
      },
      {
        id: 3,
        name: 'Rene',
        avatar: 'http://3.bp.blogspot.com/-30_NgKLPsFw/UJFXfwx6ZRI/AAAAAAAAAP8/6mnkGBm7tpU/s1600/imagesCA3K09KT.jpg'
      },
      {
        id: 4,
        name: 'Mop',
        avatar: 'http://3.bp.blogspot.com/-30_NgKLPsFw/UJFXfwx6ZRI/AAAAAAAAAP8/6mnkGBm7tpU/s1600/imagesCA3K09KT.jpg'
      }
    ];
  }
}
