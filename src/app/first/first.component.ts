import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
  Renderer2,
  HostListener,
} from '@angular/core';

import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer.js';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ModelDialogComponent } from '../model-dialog/model-dialog.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  view: any;
  parentHeight = 100;

  // Child
  @ViewChild('viewDiv', { static: true }) private viewDiv:
    | ElementRef
    | undefined;
  display: string | undefined;
  mapHeight!: number;
  dialogRef: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    await this.setMap();
    //await this.setModel();
  }

  async setMap() {
    // If GeoJSON files are not on the same domain as your website, a CORS enabled server
    // or a proxy is required.
    const url = 'http://localhost:9000/states';

    const geojsonLayer = new GeoJSONLayer({
      url: url,
      copyright: 'rand points',
    });

    const map = new Map({
      basemap: 'gray-vector',
      layers: [geojsonLayer],
    });

    const view = new MapView({
      container: this.viewDiv?.nativeElement,
      center: [-168, 46],
      zoom: 2,
      map: map,
    });

    this.view = view;
  }

  //creat a dialog with model inside it
  //Known bug: can not control inside the dialog
  openDialog() {
    const DiaCon = new MatDialogConfig();

    DiaCon.panelClass = 'custom-modelbox';
    DiaCon.disableClose = false;
    DiaCon.autoFocus = true;
    DiaCon.position = {
      top: '100px',
      left: '100px',
    };

    const diaRef = (this.dialogRef = this.dialog.open(
      ModelDialogComponent,
      DiaCon
    ));

    //get element for the dialog
    let nElem = diaRef['_containerInstance']['_elementRef'].nativeElement;

    nElem.style.position = 'absolute';
    nElem.style.height = '50vh';
    nElem.style.width = '50vw';
    nElem.style.top = '100px';
    nElem.style.left = '100px';

    diaRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  close() {
    this.dialogRef.close();
  }
}
