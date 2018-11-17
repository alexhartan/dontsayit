import { IGameRoom } from './../types/game/IGameRoom';
import { StringUtils } from './../utilities/string-utils';
import { IPlayer } from './../types/player/IPlayer';
import { MessageBusService } from './../message-bus/message-bus.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MockProvider } from '../API/MockProvider';
import { Router } from '@angular/router';
import { RoomHandler } from '../game-engine/room-handler';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public roomForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _roomHandler: RoomHandler,
    private _router: Router,
    private _mbs: MessageBusService
  ) {

    this.roomForm = this._formBuilder.group({
      gameRoom: ['', [
        Validators.minLength(4)
      ]]
    });
  }

  ngOnInit() {
    this._mbs.backgroundProgress.emit(66);
  }

  async connectToRoom() {
    if (this.roomForm.controls['gameRoom'].valid) {
      const roomCode = this.roomForm.controls['gameRoom'].value;
        
      const player: IPlayer = {
        id: StringUtils.getUid(),
        name: '',
        avatar: ''
      }
      
      const resp = await this._roomHandler.joinRoom(player, roomCode);

      if ( resp ) {
        this._router.navigate(['playerJoined', roomCode]);
      }
    }
  }

}
