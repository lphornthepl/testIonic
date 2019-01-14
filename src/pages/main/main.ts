import { Component } from '@angular/core';
import { Event } from './../Event';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  allEvent: Event[];
  date: number;
  month: number;
  year: number;
  eventName: string;
  eventDescription: string;
  editingEvent: Event[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventServiceProvider, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.allEvent = [];
    this.realMonth();
  }

  realMonth(){
    this.eventService.getEvents().forEach( event => {
      this.date = event.date;
      this.month = event.month;
      this.year = event.year;
      this.eventName= event.name;
      this.eventDescription = event.description;
      let temp = {
        date: this.date,
        month: this.month + 1,
        year: this.year,
        name: this.eventName,
        description: this.eventDescription
      }
      this.allEvent.push(temp);
    })
  }

  editEvent(date, month, year, name, description){
    this.editingEvent = [];
    this.editingEvent.push(this.eventService.getEventByName(name));
    let editPromp = this.alertCtrl.create({
      title: "Edit event details",
      inputs: [
        {
          name: 'name',
          placeholder: 'Input new event name'
        },
        {
          name: 'eventDescription',
          placeholder: 'Input your event description here'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (data != null && data != undefined) {
              console.log(data.name + " and " + data.eventDescription)
            } else {
              console.log("Can't find input data.")
              return false;
            }
          }
        }
      ]
    });
    editPromp.present();
  }

  deleteEvent(date, month, year, name, description) {
    let deleteEvent = this.alertCtrl.create({
      title: 'Delete event?',
      message: 'Do you want to delete this event?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            // console.log("Date : " + date + " Month : " + month + " Year : " + year + " Name : " + name + " Description : " + description);
            let event = {
              date: date,
              month: month - 1,
              year: year,
              description: description,
              name: name
            }
            console.log(event);
            // let deleteIndex = this.allEvent.indexOf( event );
            // console.log("Index is " + deleteIndex);
          }
        }
      ]
    });
    deleteEvent.present();
  }

}
