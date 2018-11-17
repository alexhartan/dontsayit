import { IGameRoom } from './../types/game/IGameRoom';
import { RoomHandler } from './../game-engine/room-handler';
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
  
  gameRoom:IGameRoom;

  constructor(
    private _mbs: MessageBusService,
    private _router: Router,
    private _roomHandler: RoomHandler
  ) {
    this.gameRoom = this._roomHandler.currentRoom;
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
