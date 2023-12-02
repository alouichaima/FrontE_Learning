import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriComponent } from './inscri.component';

const routes: Routes = [
  {path:'',component:InscriComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriRoutingModule { }
