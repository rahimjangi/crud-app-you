import { Component, Input, OnInit, DoCheck, ViewChild } from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {
  marker = '';
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @Input() infoContent = '';
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  @Input() markers: any = [
    {
      position: {
        lat: 41.79379975319398,
        lng: 12.252214666395005,
      },
      label: {
        color: 'red',
        text: 'Fiumicino Aeroporto',
      },
      title: 'Fiumicino Aeroporto',
      options: { animation: google.maps.Animation.BOUNCE },
    },
    {
      position: {
        lat: 41.80085132286933,
        lng: 12.592636909116832,
      },
      label: {
        color: 'red',
        text: 'Airport ' + 'Ciampino',
      },
      title: 'Ciampino',
      options: { animation: google.maps.Animation.BOUNCE },
    },
  ];
  @Input() height = '85%';
  @Input() width = '100%';
  @Input() center: { lat: number; lng: number };
  // @Input() center = new google.maps.LatLng(
  //   41.93368614340814,
  //   12.523969128595219,
  //   true
  // );
  @Input() zoom = 10;
  @Input() options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(private _toustr: ToastrService) {}

  click(event: google.maps.MapMouseEvent) {
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    this.addMarker();
  }

  ngOnInit(): void {
    //Location
    navigator.geolocation.getCurrentPosition((position) => {
      // this.center = {
      //   lat: position.coords.latitude,
      //   lng: position.coords.longitude,
      // };
      this.center = {
        lat: 41.79379975319398,
        lng: 12.252214666395005,
      };
    });
    //options
    // this.addMarker();
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
  }

  addMarker() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
      label: {
        color: 'red',
        text: this.marker,
      },
      title: this.marker,
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }
}
