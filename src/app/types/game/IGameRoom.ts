import { IPlayer } from '../player/IPlayer';

export interface IGameRoom {
  id: string;
  maxAllowedPlayers: number;
  players?: IPlayer[];
}
