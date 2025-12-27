import { Routes } from '@angular/router';
import { Acceuil } from './client/acceuil/acceuil';
import { Formation } from './client/formation/formation';
import { AdminSpace } from './admin-space/admin-space';
import { Acceuil as AdminAcceuil } from './admin-space/acceuil/acceuil';
import { ListeFormation } from './admin-space/formation/liste-formation/liste-formation';
import { ListeFormateur } from './admin-space/formateur/liste-formateur/liste-formateur';
import { ListeSession } from './admin-space/formation/session/liste-session/liste-session';
import { ListeCandidat } from './admin-space/candidat/liste-candidat/liste-candidat';
import { EditCandidat } from './admin-space/candidat/edit-candidat/edit-candidat';
import { AddCandidat } from './admin-space/candidat/add-candidat/add-candidat';

export const routes: Routes = [
  {
    path: '',
    component: Acceuil
  },
  {
    path: 'formation',
    component: Formation
  },
  {
    path: 'admin-space',
    component: AdminSpace,
    children: [
      {
        path: '',
        component: AdminAcceuil
      },
      {
        path: 'formation',
        component: ListeFormation
      },
      {
        path: 'formateur',
        component: ListeFormateur
      },
      {
        path: 'session/:workshopId',
        component: ListeSession
      },
      {
        path: 'candidat',
        component: ListeCandidat
      },
      {
        path: 'candidat/add',
        component: AddCandidat
      },
      {
        path: 'candidat/edit/:id',
        component: EditCandidat
      }
    ]
  }
];