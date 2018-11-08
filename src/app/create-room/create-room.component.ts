import { MessageBusService } from '../message-bus/message-bus.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MockProvider } from '../API/MockProvider';
import { Router } from '@angular/router';
var muiepsd = 'hlaa';
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  public roomForm: FormGroup;

  public playerCounter: number;

  public readonly MINPLAYERS = 4;
  public readonly MAXPLAYERS = 12;

  constructor(
    private _formBuilder: FormBuilder,
    private _mockProvider: MockProvider,
    private _router: Router,
    private _mbs: MessageBusService
  ) {
    
    this.playerCounter = 6;
    this.roomForm = this._formBuilder.group({
      gameRoom: ['']
    });
  }

  ngOnInit() {
    this._mbs.backgroundProgress.emit(100);
  }

  playerCount(amount: number){
    if(this.playerCounter < this.MINPLAYERS || this.playerCounter > this.MAXPLAYERS){
      return;
    }
    this.playerCounter += amount;
  }

  createRoom(){

  }
}
