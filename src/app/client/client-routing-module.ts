import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formation } from './formation/formation';
import { Acceuil } from './acceuil/acceuil';
import { Erreur404 } from './erreur404/erreur404';

const routes: Routes = [
  {path:"",component:Acceuil},
  {path:"formation",component:Formation},
  {path:"**",component:Erreur404}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
