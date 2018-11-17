import { StringUtils } from './../utilities/string-utils';
import { IGameRoom } from './../types/game/IGameRoom';
import { IPlayer } from "../types/player/IPlayer";
import { RoomProvider } from '../API/room-provider';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RoomHandler{
    
    public currentRoom: IGameRoom;

    constructor(private _roomProvider: RoomProvider){

    }

    /**
     * Attempt to join a room 
     */
    public async joinRoom(player:IPlayer, gameCode: string): Promise<boolean>{
        
        // tell server
        const gameRoom = await this._roomProvider.joinRoom(player, gameCode);

        if(gameRoom){
            this.currentRoom = gameRoom;
            return true;
        }
        
        return false;
    }

    /**
     * Attempt to create a room
     */
    public async newRoom(player: IPlayer): Promise<boolean>{
        // create room
        let gameRoom = {
            id: StringUtils.getUid(),
            maxAllowedPlayers: 12,
            players: []
        } as IGameRoom;
        
        // add creator to it
        gameRoom.players.push(player);
        
        // tell server
        gameRoom = await this._roomProvider.newRoom(gameRoom);

        if(gameRoom){
            this.currentRoom = gameRoom;
            return true;
        }

        return false;
    }
}