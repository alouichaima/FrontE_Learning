import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditformateurComponent } from './editformateur.component';

const routes: Routes = [
  {path:'',component:EditformateurComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditformateurRoutingModule { }
