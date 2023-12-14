import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriRoutingModule } from './inscri-routing.module';
import { InscriComponent } from './inscri.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    InscriComponent
  ],
  imports: [
    CommonModule,
    InscriRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
     MatSelectModule

  ]
})
export class InscriModule { }
