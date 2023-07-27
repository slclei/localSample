import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeojsonComponent } from './geojson/geojson.component';
import { FirstComponent } from './first/first.component';
import { InteractvieComponent } from './interactvie/interactvie.component';
import { ShapesComponent } from './shapes/shapes.component';
import { AreaFormationDlgComponent } from './area-formation-dlg/area-formation-dlg.component';

const routes: Routes = [
  {path:"first",component:FirstComponent},
  {path:"state",component:GeojsonComponent},
  {path:"inter",component: InteractvieComponent},
  {path:"shape",component: ShapesComponent},
  {path:"afd",component:AreaFormationDlgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
