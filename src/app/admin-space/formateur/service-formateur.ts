import { Injectable } from '@angular/core';
import { Formateur } from '../../commun/Interface-formateur';
import { ServiceDataCommun } from '../../commun/service-data-commun';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormateur {
  constructor(private dataService: ServiceDataCommun) {}

  getFormateurs(): Formateur[] {
    return this.dataService.getDataFormateurs();
  }

  addFormateur(formateur: Formateur): void {
    const formateurs = this.getFormateurs();
    formateur.id = 'F' + (formateurs.length + 1);
    formateurs.push(formateur);
    this.saveFormateurs(formateurs);
  }

  updateFormateur(formateur: Formateur): void {
    const formateurs = this.getFormateurs();
    const index = formateurs.findIndex(f => f.id === formateur.id);
    if (index !== -1) {
      formateurs[index] = formateur;
      this.saveFormateurs(formateurs);
    }
  }

  deleteFormateur(id: string): void {
    const formateurs = this.getFormateurs();
    const filtered = formateurs.filter(f => f.id !== id);
    this.saveFormateurs(filtered);
  }

  private saveFormateurs(formateurs: Formateur[]): void {
    this.dataService.saveFormateursData(formateurs);
  }
}
