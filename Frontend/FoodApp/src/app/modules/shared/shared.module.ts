import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditLocationComponent } from './add-edit-location/add-edit-location.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverBtnDirective } from 'src/app/hover-btn.directive';



@NgModule({
  declarations: [AddEditLocationComponent, HoverBtnDirective],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddEditLocationComponent
  ],
  exports: [
    HoverBtnDirective,
  ]
})
export class SharedModule { }