import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelDialogComponent } from './model-dialog/model-dialog.component';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GeojsonComponent } from './geojson/geojson.component';
import { InteractvieComponent } from './interactvie/interactvie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FirstComponent,
    AppComponent,
    GeojsonComponent,
    ModelDialogComponent,
    TestComponent,
    InteractvieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    DragDropModule,
    FormsModule
  ],
  exports:[MatDialogModule,DragDropModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
