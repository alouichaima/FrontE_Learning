import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditformateurRoutingModule } from './editformateur-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { EditformateurComponent } from './editformateur.component';


@NgModule({
  declarations: [
    EditformateurComponent
  ],
  imports: [

    FormsModule,
    CommonModule,
    //  HttpClientModule,
    MatFormFieldModule,
     MatInputModule,
     MatCardModule,
    MatSelectModule,
     MatButtonModule,
    EditformateurRoutingModule,
    FormsModule
  ]
})
export class EditformateurModule { }
