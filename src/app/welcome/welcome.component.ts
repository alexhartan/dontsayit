import { MessageBusService } from './../message-bus/message-bus.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MockProvider } from '../API/MockProvider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public roomForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _mockProvider: MockProvider,
    private _router: Router,
    private _mbs: MessageBusService
  ) {

    this.roomForm = this._formBuilder.group({
      gameRoom: ['']
    });
  }

  ngOnInit() {
    this._mbs.backgroundProgress.emit(100);
  }

  connectToRoom() {
    if (this.roomForm.controls['gameRoom'].valid) {
      const roomCode = this.roomForm.controls['gameRoom'].value;
      if (this._mockProvider.send()) {
        this._router.navigate(['playerJoined', roomCode]);
      }
    }
  }
}
