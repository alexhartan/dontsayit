import { IPlayer } from '../player/IPlayer';
import { ISolution } from '../solutions/ISolution';

export interface IGameRound {
  id: string;
  activePlayer: IPlayer;
  solutions: ISolution[];
}
