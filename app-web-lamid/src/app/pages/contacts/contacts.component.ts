import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  private map: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log("Contacts page")

    let loader = new Loader({
      apiKey:'AIzaSyDo0WJ44VCW2P4mhJ1oy8dGrGPQst2R14s'
    })

    loader.load().then(() => {
      // Location
      const location = {
        lat: -27.602855,
        lng: -48.519430
      }

      // Maps
      this.map = new google.maps.Map(<HTMLElement>document.getElementById('map'), {
        center: location,
        zoom: 17,
      })

      // marker
      const marker = new google.maps.Marker({
        position: location,
        map: this.map
      })
    })
  }

  breadcrumbHome() {
    this.router.navigate(['/pages/home']);
  }

}
