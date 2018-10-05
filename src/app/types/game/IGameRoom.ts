import { IPlayer } from '../player/IPlayer';

export interface IGameRoom {
  id: string;
  players?: IPlayer[];
}
