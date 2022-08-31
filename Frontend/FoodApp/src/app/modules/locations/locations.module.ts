import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations/locations.component';
import {MaterialModule} from "../material/material.module";
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    LocationsComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MaterialModule
  ]
})
export class LocationsModule { }
