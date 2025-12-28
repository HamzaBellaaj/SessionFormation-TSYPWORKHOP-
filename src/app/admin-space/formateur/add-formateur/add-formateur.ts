import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Formateur } from '../../../commun/Interface-formateur';

@Component({
  selector: 'app-add-formateur',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-formateur.html',
  styleUrl: './add-formateur.css',
})
export class AddFormateur {
  @Output() save = new EventEmitter<Formateur>();
  @Output() cancel = new EventEmitter<void>();

  formateur: Formateur = {
    id: '',
    nom: '',
    prenom: '',
    mail: '',
    cin: '',
    pays: '',
    cv: 'assets/cv.jpg',
    dateNaissance: '',
    lieuTravail: '',
    image: ''
  };

  onSave(): void {
    if (this.validateForm()) {
      this.save.emit(this.formateur);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  validateForm(): boolean {
    return !!(this.formateur.nom && this.formateur.prenom && this.formateur.mail);
  }
}
