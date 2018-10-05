import { Component, OnInit } from '@angular/core';
import { GameRoomManager } from '../game-room/game-room-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public grm: GameRoomManager) { }

  ngOnInit() {
  }

}
