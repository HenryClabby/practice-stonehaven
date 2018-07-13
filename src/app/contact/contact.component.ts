import { Component, OnInit } from '@angular/core';
// import { google } from '';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  // Initialize and add the map
  /*initMap() {
  // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }*/

  ngOnInit() {
    //this.initMap();
  }

}
