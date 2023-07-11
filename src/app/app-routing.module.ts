import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeojsonComponent } from './geojson/geojson.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {path:"first",component:FirstComponent},
  {path:"state",component:GeojsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
