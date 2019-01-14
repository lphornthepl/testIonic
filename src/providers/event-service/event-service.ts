import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs/observable/of';
import { EVENTS } from '../../pages/event-mock';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  getEvents() {
    return EVENTS;
  }

  getEvent(eventDate: number) {
    return EVENTS.find(event => event.date === eventDate);
  }

  getEventByName(eventName: string) {
    return EVENTS.find(event => event.name === eventName);
  }

}
