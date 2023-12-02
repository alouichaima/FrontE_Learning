import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteformateurComponent } from '../deleteformateur.component';

const routes: Routes = [
  {path:'',component:DeleteformateurComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteformateurRoutingModule { }
