import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriRoutingModule } from './inscri-routing.module';
import { InscriComponent } from './inscri.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InscriComponent
  ],
  imports: [
    CommonModule,
    InscriRoutingModule,
    HttpClientModule,
    FormsModule

  ]
})
export class InscriModule { }
