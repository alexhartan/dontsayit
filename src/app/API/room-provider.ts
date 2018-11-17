import { IGameRoom } from './../types/game/IGameRoom';
import { IPlayer } from '../types/player/IPlayer';
import { GameRoomRoutes } from './backend-routes/game-room';
import { IApiRoute } from '../types/api/IApiRoute';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * The requests made through this api
 * should hit cached json files
 */
@Injectable({
  providedIn: 'root'
})
export class RoomProvider {
  private _apiRoutes: IApiRoute[];

  constructor(public http: HttpClient) {
    this._apiRoutes = GameRoomRoutes;
  }


  public async newRoom(gameRoom: IGameRoom): Promise<IGameRoom> {

    const location = this._apiRoutes.find(route  => route.name === 'NewGame');
    const data = new HttpParams()
      ;

    try {
      return {

        id: 'UJKL',
        maxAllowedPlayers: gameRoom.maxAllowedPlayers,
        players: gameRoom.players
      };
      // return await this.http.post(location.path, data).toPromise();
    } catch (err) {
      console.error(err);
    }
  }

  public async joinRoom(player: IPlayer, gameCode: string): Promise<IGameRoom> {

    const location = this._apiRoutes.find(route  => route.name === 'JoinGame');
    
    const data = new HttpParams()
      ;

    try {
      return {
        id: gameCode,
        maxAllowedPlayers: 4,
        players: [player]
      };
      // return await this.http.post(location.path, data).toPromise();
    } catch (err) {
      console.error(err);
    }
  }
}
