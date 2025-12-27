import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceCandidat } from '../service-candidat';
import { Candidats } from '../../../commun/Interface-candidat';
@Component({
  selector: 'app-liste-candidat',
  imports: [CommonModule, RouterModule],
  templateUrl: './liste-candidat.html',
  styleUrl: './liste-candidat.css',
})
export class ListeCandidat {
  candidats: Candidats[] = [];
  constructor(private serviceCandidat: ServiceCandidat) {
    this.candidats = this.serviceCandidat.getCandidats();
  }
  deleteCandidat(candidat: Candidats) {
    if (confirm(`Voulez-vous vraiment supprimer ${candidat.prenom} ${candidat.nom} ?`)) {
      this.serviceCandidat.deleteCandidat(candidat.id);
      this.candidats = this.serviceCandidat.getCandidats();
    }
  }
}
