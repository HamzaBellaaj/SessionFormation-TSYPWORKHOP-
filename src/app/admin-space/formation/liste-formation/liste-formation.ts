import { Component, OnInit } from '@angular/core';
import { workshopi } from '../../../commun/Interface-workshop';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddFormation } from '../add-formation/add-formation';
import { EditFormation } from '../edit-formation/edit-formation';
import { ServiceFormation } from '../service-formation';

@Component({
  selector: 'app-liste-formation',
  imports: [CommonModule, RouterModule, AddFormation, EditFormation],
  templateUrl: './liste-formation.html',
  styleUrl: './liste-formation.css',
})
export class ListeFormation implements OnInit {
  formations: workshopi[] = [];
  showAdd = false;
  showEdit = false;
  selectedFormation: workshopi | null = null;

  constructor(private service: ServiceFormation, private router: Router) {}

  ngOnInit() {
    this.chargerFormations();
  }

  chargerFormations(): void {
    this.formations = this.service.getFormations();
  }

  ajouterFormation(): void {
    this.showAdd = true;
    this.showEdit = false;
  }

  editerFormation(formation: workshopi): void {
    this.selectedFormation = { ...formation };
    this.showEdit = true;
    this.showAdd = false;
  }

  supprimerFormation(id: string): void {
    if (confirm('Supprimer cette formation ?')) {
      this.service.deleteFormation(id);
      this.chargerFormations();
    }
  }

  sauvegarderAjout(formation: workshopi): void {
    this.service.addFormation(formation);
    this.chargerFormations();
    this.showAdd = false;
  }

  sauvegarderModification(formation: workshopi): void {
    this.service.updateFormation(formation);
    this.chargerFormations();
    this.showEdit = false;
    this.selectedFormation = null;
  }

  annuler(): void {
    this.showAdd = false;
    this.showEdit = false;
    this.selectedFormation = null;
  }

  allerAuxSessions(id: string): void {
    this.router.navigate(['/admin-space/session', id]);
  }

  compterSessions(formation: workshopi): number {
    return formation.sessions?.length || 0;
  }

  compterEtudiants(formation: workshopi): number {
    let total = 0;
    if (formation.sessions) {
      for (let session of formation.sessions) {
        total = total + (session.nombreEtudiants || 0);
      }
    }
    return total;
  }
}