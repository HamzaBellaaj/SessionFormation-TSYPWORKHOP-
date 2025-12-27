import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formation } from './formation/formation';
import { Acceuil } from './acceuil/acceuil';

const routes: Routes = [
  {path:"",component:Acceuil},
  {path:"formation",component:Formation},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
