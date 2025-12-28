import { Injectable, signal } from '@angular/core';
import { Formateur } from '../../commun/Interface-formateur';
import { ServiceDataCommun } from '../../commun/service-data-commun';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormateur {
  formateurs$ = signal<Formateur[]>([]);

  constructor(private dataService: ServiceDataCommun) {
    this.formateurs$.set(this.dataService.getDataFormateurs());
  }

  getFormateurs(): Formateur[] {
    return this.dataService.getDataFormateurs();
  }

  addFormateur(formateur: Formateur): void {
    const formateurs = this.getFormateurs();
    formateur.id = 'F' + (formateurs.length + 1);
    formateurs.push(formateur);
    this.saveFormateurs(formateurs);
    this.formateurs$.set([...formateurs]);
  }

  updateFormateur(formateur: Formateur): void {
    const formateurs = this.getFormateurs();
    const index = formateurs.findIndex(f => f.id === formateur.id);
    if (index !== -1) {
      formateurs[index] = formateur;
      this.saveFormateurs(formateurs);
      this.formateurs$.set([...formateurs]);
    }
  }

  deleteFormateur(id: string): void {
    const formateurs = this.getFormateurs();
    const filtered = formateurs.filter(f => f.id !== id);
    this.formateurs$.set(filtered);
    this.saveFormateurs(filtered);
  }

  private saveFormateurs(formateurs: Formateur[]): void {
    this.dataService.saveFormateursData(formateurs);
  }
}
