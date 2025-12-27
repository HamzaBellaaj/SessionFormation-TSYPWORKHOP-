import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceCandidat } from '../service-candidat';
import { Candidats } from '../../../commun/Interface-candidat';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.html',
  styleUrl: './add-candidat.css',
  providers: [ServiceCandidat],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddCandidat {
  candidat: Candidats = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    cin: 0,
    photo: ''
  };

  router: Router;

  constructor(router: Router, private serviceCandidat: ServiceCandidat) {
    this.router = router;
  }

  onSubmit() {
    if (this.candidat.nom && this.candidat.prenom && this.candidat.email && this.candidat.cin) {
      const existingCandidats = this.serviceCandidat.getCandidats();
      const newId = existingCandidats.length > 0 ? Math.max(...existingCandidats.map(c => c.id)) + 1 : 1;
      
      this.candidat.id = newId;
      this.serviceCandidat.addCandidat(this.candidat);
      alert('Candidat ajouté avec succès !');
      this.router.navigate(['/admin-space/candidat']);
    } else {
      alert('Veuillez remplir tous les champs requis');
    }
  }
}
