import { IGameRoom } from './../types/game/IGameRoom';
import { MessageBusService } from './../message-bus/message-bus.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomHandler } from '../game-engine/room-handler';
import { StringUtils } from '../utilities/string-utils';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit, OnDestroy {

  private _subscriptions$: Subscription[] = [];

  public gameRoom: IGameRoom;
  constructor(
    private _activated: ActivatedRoute,
    private _roomHandler: RoomHandler,
    private _mbs: MessageBusService
  ) {
    this.gameRoom = this._roomHandler.currentRoom;
  }

  ngOnInit() {
    const sub$ = this._activated.params.subscribe((params) => {
      console.log(params);
        const gameRoom = {
          id: params['roomId'],
          maxAllowedPlayers:4,
          players: [{
            id: StringUtils.getUid(),
            name: 'Player 1',
            avatar: ''
          },{
            id: StringUtils.getUid(),
            name: 'Player 2',
            avatar: ''
          },{
            id: StringUtils.getUid(),
            name: 'Player 3',
            avatar: ''
          },{
            id: StringUtils.getUid(),
            name: 'Player 4',
            avatar: ''
          }]
        }
        this.gameRoom = gameRoom;
    });
    this._subscriptions$.push(sub$);
    this._mbs.backgroundProgress.emit(66);
  }

  ngOnDestroy(): void {
    this._subscriptions$.map(el => el.unsubscribe());
  }

}
