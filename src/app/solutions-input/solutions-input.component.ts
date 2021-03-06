import { MessageBusService } from './../message-bus/message-bus.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { MockProvider } from '../API/MockProvider';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solutions-input',
  templateUrl: './solutions-input.component.html',
  styleUrls: ['./solutions-input.component.scss']
})
export class SolutionsInputComponent implements OnInit {

  counter: number;
  solutionsForm: FormGroup;
  private _subscriptions$: Subscription[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _gameRoomManager: MockProvider,
    private _router: Router,
    private _mbs: MessageBusService
  ) {

    this.solutionsForm = this._formBuilder.group({
      solution1: [''],
      solution2: [''],
      solution3: [''],
      solution4: [''],
      solution5: [''],
    });

    this.startTimer(90);
    this._mbs.backgroundProgress.emit(66);
  }

  startTimer(nrOfSeconds: number = 90) {
    const countDownSub$ = interval(1000)
      .pipe(takeWhile(it => it <= nrOfSeconds))
      .subscribe(val => {
        this.counter = nrOfSeconds - val;
      });
  }

  ngOnInit() {
  }

}
