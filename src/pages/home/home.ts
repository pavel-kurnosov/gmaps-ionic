import { Component, NgZone, Input, ViewChild, ElementRef } from "@angular/core";
import { NavController } from "ionic-angular";
declare var plugin;

import { ToastController } from "ionic-angular";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("mapId") private mapId: ElementRef;

  map: any;
  constructor(public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = plugin.google.maps.Map.getMap(this.mapId.nativeElement, {
      controls: {
        myLocationButton: true,
        indoorPicker: true
      }
    });
  }
}
