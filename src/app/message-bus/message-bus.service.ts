import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {
  public backgroundProgress: EventEmitter<number> = new EventEmitter<number>();
  public teamChange: EventEmitter<string> = new EventEmitter<string>();
}
