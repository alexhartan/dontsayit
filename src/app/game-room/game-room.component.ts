import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {

  gameRoom = '';

  private _subscriptions: Subscription[];

  constructor(
    private _activated: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    const sub$ = this._activated.params.subscribe((params) => {
      this.gameRoom = params['roomId'];
    });
  }

}
