import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Acceuil } from '../admin-space/acceuil/acceuil';
import { ListeFormation } from '../admin-space/formation/liste-formation/liste-formation';
import { ListeFormateur } from './formateur/liste-formateur/liste-formateur';
import { ListeSession } from './formation/session/liste-session/liste-session';
import { ListeCandidat } from './candidat/liste-candidat/liste-candidat';

const routes: Routes = [
  {path:"",component:Acceuil},
  {path:"formation",component:ListeFormation},
  {path:"formateur",component:ListeFormateur},
  { path: "session/:workshopId", component: ListeSession },
  {path:"candidat",component:ListeCandidat}
];
export class ClientRoutingModule { }
