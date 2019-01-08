import { Event } from './../Event';
import { EventServiceProvider } from './../../providers/event-service/event-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentEvents: Event[];
  date: number;
  month: number;
  year: number;
  hasEvent: boolean;

  constructor(public navCtrl: NavController, private eventService: EventServiceProvider) {
    // this.calendar.createCalendar('MyCalendar').then(
    //   (msg) => { console.log(msg); },
    //   (err) => { console.log(err); }
    // );
  }

  ngOnInit() {
    this.getAllEvents();
  }

  onSelectDate(event) {
    console.log(event)
    this.date = event.date;
    this.month = event.month+1;
    this.year = event.year;
    this.hasEvent = event.hasEvent; 
  }

  getAllEvents() {
    this.currentEvents = this.eventService.getEvents();
  }

}
