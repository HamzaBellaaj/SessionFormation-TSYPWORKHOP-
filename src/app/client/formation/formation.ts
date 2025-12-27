import { Component, OnInit } from '@angular/core';
import { CHeader } from '../cheader/cheader';
import { Workshops } from './workshops/workshops';
import { Session } from './session/session';
import { ServiceDataCommun } from '../../commun/service-data-commun';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CHeader, Workshops, Session, FormsModule],
  templateUrl: './formation.html',
  styleUrl: './formation.css',
})
export class Formation implements OnInit {
  formations: any[] = [];
  formateurs: any[] = [];
  afficherDetails = false;
  idSelected: number = -1;
  rechercheText: string = '';
  formations_filtrees: any[] = [];
  
  constructor(private service: ServiceDataCommun) {}

  ngOnInit() {
    this.chargerDonnees();
  }

  chargerDonnees() {
    this.formations = this.service.getDataWorkshops();
    this.formateurs = this.service.getDataFormateurs();
    this.formations_filtrees = [...this.formations];
  }

  afficherDetailsFormation(id: number) {
    this.idSelected = id;
    this.afficherDetails = true;
  }

  retourAuListe() {
    this.afficherDetails = false;
    this.idSelected = -1;
    this.chargerDonnees();
  }

  compterEtudiants(formation: any): number {
    let total = 0;
    if (formation.sessions) {
      for (let session of formation.sessions) {
        total = total + session.nombreEtudiants;
      }
    }
    return total;
  }

  rechercher(): void {
    if (!this.rechercheText.trim()) {
      this.formations_filtrees = [...this.formations];
      return;
    }

    const texte = this.rechercheText.toLowerCase();
    this.formations_filtrees = [];
    
    for (let formation of this.formations) {
      let trouve = false;
      
      if (formation.titre.toLowerCase().includes(texte)) {
        trouve = true;
      }
      
      if (formation.niveau.toLowerCase().includes(texte)) {
        trouve = true;
      }
      
      if (formation.tags) {
        for (let tag of formation.tags) {
          if (tag.toLowerCase().includes(texte)) {
            trouve = true;
          }
        }
      }
      
      if (trouve) {
        this.formations_filtrees.push(formation);
      }
    }
  }
}