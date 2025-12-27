import { Injectable } from '@angular/core';
import { Formateur } from '../commun/Interface-formateur';
import { Sessionn } from '../commun/Interface-session';
import { workshopi } from '../commun/Interface-workshop';
import { formateurs } from './dataformateurs';
import { datawork } from './dataworkshops';

@Injectable({
  providedIn: 'root',
})
export class ServiceDataCommun {
  // Pour les workshops
  saveDataWorkshops(): void {
    localStorage.setItem('workshops', JSON.stringify(datawork));
  }
  
  saveWorkshopsData(workshops: workshopi[]): void {
    localStorage.setItem('workshops', JSON.stringify(workshops));
  }
  
  getDataWorkshops(): workshopi[] {
    const data = localStorage.getItem('workshops');
    if (data !== null) {
      return JSON.parse(data);
    } else {
      this.saveDataWorkshops();
      return datawork;
    }
  }

  // Pour les formateurs
  saveDataFormateurs(): void {
    localStorage.setItem('formateurs', JSON.stringify(formateurs));
  }
  
  saveFormateursData(formateursData: Formateur[]): void {
    localStorage.setItem('formateurs', JSON.stringify(formateursData));
  }
  
  getDataFormateurs(): Formateur[] {
    const data = localStorage.getItem('formateurs');
    if (data !== null) {
      return JSON.parse(data);
    } else {
      this.saveDataFormateurs();
      return formateurs;
    }
  }
  
}