import { Injectable } from '@angular/core';
import { workshopi } from '../../commun/Interface-workshop';
import { ServiceDataCommun } from '../../commun/service-data-commun';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormation {
  constructor(private dataService: ServiceDataCommun) {}

  getFormations(): workshopi[] {
    return this.dataService.getDataWorkshops();
  }

  addFormation(formation: workshopi): void {
    const formations = this.getFormations();
    formation.id = Date.now().toString();
    formation.sessions = [];
    formations.push(formation);
    this.saveFormations(formations);
  }

  updateFormation(formation: workshopi): void {
    const formations = this.getFormations();
    const index = formations.findIndex(f => f.id === formation.id);
    if (index !== -1) {
      formations[index] = formation;
      this.saveFormations(formations);
    }
  }

  deleteFormation(id: string): void {
    const formations = this.getFormations();
    const filtered = formations.filter(f => f.id !== id);
    this.saveFormations(filtered);
  }

  private saveFormations(formations: workshopi[]): void {
    this.dataService.saveWorkshopsData(formations);
  }
}
