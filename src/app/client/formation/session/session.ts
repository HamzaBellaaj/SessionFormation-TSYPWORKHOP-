import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sessionn } from '../../../commun/Interface-session';
import { Formateur } from '../../../commun/Interface-formateur';
import { NewInscri } from "./new-inscri/new-inscri";

@Component({
  selector: 'app-session',
  imports: [NewInscri],
  templateUrl: './session.html',
  styleUrl: './session.css',
})
export class Session {
  @Input() session!: Sessionn;
  @Input() formateurs!: Formateur[];
  @Input() workshopId!: string;
  @Output() inscriptionComplete = new EventEmitter<void>();
  
  showForm = false;
  
  constructor() {}

  getFormateur1(): Formateur | null {
    if (!this.session.formateur) return null;
    return this.formateurs.find(f => f.id === this.session.formateur) || null;
  }

  getFormateur2(): Formateur | null {
    if (!this.session.formateur1) return null;
    return this.formateurs.find(f => f.id === this.session.formateur1) || null;
  }

  isComplet(): boolean {
    return this.session.nombreEtudiants >= 15;
  }

  openForm(): void {
    if (!this.isComplet()) {
      this.showForm = true;
    }
  }

  closeForm(): void {
    this.showForm = false;
    this.inscriptionComplete.emit();
  }
}