import { MessageBusService } from './../message-bus/message-bus.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-game-round',
  templateUrl: './game-round.component.html',
  styleUrls: ['./game-round.component.scss']
})
export class GameRoundComponent implements OnInit {

  counter: number;
  private _subscriptions$: Subscription[] = [];

  constructor(
    private _mbs: MessageBusService
  ) {
    this.startTimer(60);

  }

  ngOnInit() {
    this._mbs.backgroundProgress.emit(100);
  }

  startTimer(nrOfSeconds: number = 60) {
    const countDownSub$ = interval(1000)
      .pipe(takeWhile(it => it <= nrOfSeconds))
      .subscribe(val => {
        this.counter = nrOfSeconds - val;
      });
  }

  skip() {
    this.startTimer(60);
  }

  correct() {
    this.startTimer(60);
  }
}
