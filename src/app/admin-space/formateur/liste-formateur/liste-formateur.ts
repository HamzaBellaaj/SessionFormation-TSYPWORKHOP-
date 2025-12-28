import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../../../commun/Interface-formateur';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddFormateur } from '../add-formateur/add-formateur';
import { EditFormateur } from '../edit-formateur/edit-formateur';
import { ServiceFormateur } from '../service-formateur';

@Component({
  selector: 'app-liste-formateur',
  imports: [CommonModule, RouterModule, AddFormateur, EditFormateur],
  templateUrl: './liste-formateur.html',
  styleUrl: './liste-formateur.css'
})
export class ListeFormateur implements OnInit {
  formateurs: Formateur[] = [];
  showAdd = false;
  showEdit = false;
  selectedFormateur: Formateur | null = null;

  constructor(private formateurService: ServiceFormateur, private router: Router) {
    // Détecter les changements du signal
    effect(() => {
      this.formateurs = this.formateurService.formateurs$();
    });
  }

  ngOnInit() {
    this.loadFormateurs();
  }

  loadFormateurs(): void {
    this.formateurs = this.formateurService.getFormateurs();
  }

  getAge(dateNaissance: string): number {
    const birthDate = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  onAddFormateur(): void {
    this.showAdd = true;
    this.showEdit = false;
    this.selectedFormateur = null;
  }

  onEditFormateur(formateur: Formateur): void {
    this.selectedFormateur = {...formateur};
    this.showEdit = true;
    this.showAdd = false;
  }

  onDeleteFormateur(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce formateur ?')) {
      this.formateurService.deleteFormateur(id);
    }
  }

  onSaveAdd(formateur: Formateur): void {
    this.formateurService.addFormateur(formateur);
    this.showAdd = false;
  }

  onSaveEdit(formateur: Formateur): void {
    this.formateurService.updateFormateur(formateur);
    this.loadFormateurs();
    this.selectedFormateur = null;
  }

  onCancel(): void {
    this.showAdd = false;
    this.showEdit = false;
    this.selectedFormateur = null;
  }
}