
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCandidat } from '../service-candidat';
import { Candidats } from '../../../commun/Interface-candidat';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.html',
  styleUrl: './edit-candidat.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EditCandidat {
  candidat: Candidats | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceCandidat: ServiceCandidat
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.candidat = this.serviceCandidat.getCandidatById(id);
  }

  onSubmit() {
    if (this.candidat) {
      this.serviceCandidat.updateCandidat(this.candidat);
      alert('Candidat modifié avec succès !');
      this.router.navigate(['/admin-space/candidat']);
    }
  }
}
