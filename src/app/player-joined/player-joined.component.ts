import { Router } from '@angular/router';
import { MessageBusService } from './../message-bus/message-bus.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-joined',
  templateUrl: './player-joined.component.html',
  styleUrls: ['./player-joined.component.scss']
})
export class PlayerJoinedComponent implements OnInit {

  selectedTeam: string;
  constructor(
    private _mbs: MessageBusService,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this._mbs.backgroundProgress.emit(33);
  }


  nextRoom(){
    this._router.navigate(['gameRoom', 1234]);
  }

  chooseTeam(name: string){
    this.selectedTeam = name;
    this._mbs.teamChange.emit(name);
  }
}
