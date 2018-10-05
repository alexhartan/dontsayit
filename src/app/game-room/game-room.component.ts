import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameRoomManager } from './game-room-manager.service';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit, OnDestroy {

  private _subscriptions$: Subscription[] = [];

  constructor(
    private _activated: ActivatedRoute,
    public grm: GameRoomManager
  ) {

  }

  ngOnInit() {
    const sub$ = this._activated.params.subscribe((params) => {
      this.grm.getRoom(params['roomId']);
    });
    this._subscriptions$.push(sub$);
  }

  ngOnDestroy(): void {
    this._subscriptions$.map(el => el.unsubscribe());
  }

}
