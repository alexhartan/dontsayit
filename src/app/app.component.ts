import { MessageBusService } from './message-bus/message-bus.service';
import { Component } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dsit';
  
  progress: number;
  team: string ;

  private _subscriptions: Subscription[] = [];

  constructor(
    private _mbs: MessageBusService,
    private cdref: ChangeDetectorRef 
  ){
    let sub$ = this._mbs.backgroundProgress.subscribe( progressNr => {
      this.progress = progressNr
      this.cdref.detectChanges();
     });

     this._subscriptions.push(sub$);

     
    sub$ = this._mbs.teamChange.subscribe( name => {
      this.team = name
      this.cdref.detectChanges();
     });
  }
}
