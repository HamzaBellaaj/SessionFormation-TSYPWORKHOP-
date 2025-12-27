import { Injectable } from '@angular/core';
import { candidats } from '../../commun/datacandidat';
import { Candidats } from '../../commun/Interface-candidat';

@Injectable({
  providedIn: 'root',
})
export class ServiceCandidat {
  private candidatsList: Candidats[] = candidats;

  getCandidats(): Candidats[] {
    return this.candidatsList;
  }

  getCandidatById(id: number): Candidats | undefined {
    return this.candidatsList.find(c => c.id === id);
  }

  addCandidat(candidat: Candidats): void {
    this.candidatsList.push(candidat);
  }

  updateCandidat(updated: Candidats): void {
    const index = this.candidatsList.findIndex(c => c.id === updated.id);
    if (index !== -1) {
      this.candidatsList[index] = { ...updated };
    } else {
      // Si le candidat n'existe pas, on l'ajoute
      this.addCandidat(updated);
    }
  }

  deleteCandidat(id: number): void {
    this.candidatsList = this.candidatsList.filter(c => c.id !== id);
  }
}
