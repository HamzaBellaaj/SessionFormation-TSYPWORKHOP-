import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceCandidat } from '../service-candidat';
import { Candidats } from '../../../commun/Interface-candidat';
import { AddCandidat } from '../add-candidat/add-candidat';
import { EditCandidat } from '../edit-candidat/edit-candidat';

@Component({
  selector: 'app-liste-candidat',
  imports: [CommonModule, RouterModule],
  templateUrl: './liste-candidat.html',
  styleUrl: './liste-candidat.css',
})
export class ListeCandidat implements OnInit {
  candidats: Candidats[] = [];
  showAdd = false;
  showEdit = false;
  selectedCandidat: Candidats | null = null;

  constructor(private serviceCandidat: ServiceCandidat) {
    effect(() => {
      this.candidats = this.serviceCandidat.candidats$();
    });
  }

  ngOnInit() {
    this.loadCandidats();
  }

  loadCandidats(): void {
    this.candidats = this.serviceCandidat.getCandidats();
  }

  onAddCandidat(): void {
    this.showAdd = true;
    this.showEdit = false;
  }

  onEditCandidat(candidat: Candidats): void {
    this.selectedCandidat = {...candidat};
    this.showEdit = true;
    this.showAdd = false;
  }

  onDeleteCandidat(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.serviceCandidat.deleteCandidat(id);
    }
  }

  onSaveAdd(candidat: Candidats): void {
    this.serviceCandidat.addCandidat(candidat);
    this.showAdd = false;
  }

  onSaveEdit(candidat: Candidats): void {
    this.serviceCandidat.updateCandidat(candidat);
    this.showEdit = false;
    this.selectedCandidat = null;
    this.loadCandidats();
  }

  onCancel(): void {
    this.showAdd = false;
    this.showEdit = false;
    this.selectedCandidat = null;
  }
}
