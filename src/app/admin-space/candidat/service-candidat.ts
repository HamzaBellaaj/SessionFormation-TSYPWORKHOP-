import { Injectable, signal } from '@angular/core';
import { Candidats } from '../../commun/Interface-candidat';
import { ServiceDataCommun } from '../../commun/service-data-commun';

@Injectable({
  providedIn: 'root',
})
export class ServiceCandidat {
  candidats$ = signal<Candidats[]>([]);

  constructor(private dataService: ServiceDataCommun) {
    this.candidats$.set(this.dataService.getDataCandidats());
  }

  getCandidats(): Candidats[] {
    return this.dataService.getDataCandidats();
  }

  getCandidatById(id: number): Candidats | undefined {
    return this.getCandidats().find(c => c.id === id);
  }

  addCandidat(candidat: Candidats): void {
    const candidats = this.getCandidats();
    const maxId = candidats.length > 0 ? Math.max(...candidats.map(c => c.id)) : 0;
    candidat.id = maxId + 1;
    candidats.push(candidat);
    this.saveCandidats(candidats);
    this.candidats$.set([...candidats]);
  }

  updateCandidat(candidat: Candidats): void {
    const candidats = this.getCandidats();
    const index = candidats.findIndex(c => c.id === candidat.id);
    if (index !== -1) {
      candidats[index] = candidat;
      this.saveCandidats(candidats);
      this.candidats$.set([...candidats]);
    }
  }

  deleteCandidat(id: number): void {
    const candidats = this.getCandidats();
    const candidat = candidats.find(c => c.id === id);
    if (candidat && candidat.session) {
      const workshops = this.dataService.getDataWorkshops();
      const workshop = workshops.find(w => w.id);
      if (workshop) {
        const session = workshop.sessions.find(s => s.id === candidat.session);
        if (session && session.nombreEtudiants > 0) {
          session.nombreEtudiants--;
          this.dataService.saveWorkshopsData(workshops);
        }
      }
    }
    
    const filtered = candidats.filter(c => c.id !== id);
    this.candidats$.set(filtered);
    this.saveCandidats(filtered);
  }

  private saveCandidats(candidats: Candidats[]): void {
    this.dataService.saveCandidatsData(candidats);
  }
}
