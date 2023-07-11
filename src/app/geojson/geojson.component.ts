import { query } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Query, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import MapView from '@arcgis/core/views/MapView';
import { config } from 'rxjs';
import { ModelDialogComponent } from '../model-dialog/model-dialog.component';
import Map from "@arcgis/core/Map.js";

@Component({
  selector: 'app-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.css']
})
export class GeojsonComponent implements OnInit {
  parentHeight = 100;

  ///////////////////////////////////////
  // Child
  @ViewChild("mapViewDiv", { static: true }) private mapViewDiv: ElementRef | undefined;


  /////////////////////////////////////////////////////
  // Me

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.initializeMap();
  }

  async initializeMap() {
    try {
      const url="http://127.0.0.1:9000/states/";
      const geojsonLayer = new GeoJSONLayer({
        url: url,
        copyright: "USGS Earthquakes",
      });

      const map = new Map({
        basemap: "gray-vector",
        layers: [geojsonLayer]
      });

      const view = new MapView({
        container: "viewDiv",
        center: [-168, 46],
        zoom: 2,
        map: map
      });
    } catch (error) {
      console.error(error);
    }
  }
}
