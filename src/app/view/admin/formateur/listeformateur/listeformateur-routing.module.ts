import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeformateurComponent } from './listeformateur.component';

const routes: Routes = [
  {path:'', component:ListeformateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeformateurRoutingModule { }
