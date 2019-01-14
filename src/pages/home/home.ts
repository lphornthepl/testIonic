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
  alllDayEvents: Event[];
  eventName: string;
  eventDescription: string;
  date: number;
  month: number;
  year: number;
  hasEvent: boolean;
  selectedDate: any;

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
    // console.log(event);
    this.date = event.date;
    this.month = event.month;
    this.year = event.year;
    this.hasEvent = event.hasEvent; 

    if (this.hasEvent){
      this.selectedDate = this.getAllDayEvent(this.date, this.month, this.year);
      // this.eventName = this.selectedDate.name;
      // this.eventDescription = this.selectedDate.description;
      // this.month = this.month + 1
      // console.log("Event name: " + this.eventName + " Event description: " + this.eventDescription);
      
    } else {
      console.log("No event on this day.")
    }
  }

  getAllEvents() {
    this.currentEvents = this.eventService.getEvents();
  }

  getAllDayEvent(d, m, y) {
    let allEvent = this.eventService.getEvents();
    this.alllDayEvents = [];
    // console.log(allEvent);
    allEvent.forEach( event => {
      console.log(event)
      if (event.date === d && event.month === m && event.year === y){
        this.alllDayEvents.push(event);
        console.log(this.alllDayEvents);
      } else {
        console.log("No maching event!");
      }
    }) 
  }

}
