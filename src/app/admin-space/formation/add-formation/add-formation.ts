import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { workshopi } from '../../../commun/Interface-workshop';

@Component({
  selector: 'app-add-formation',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-formation.html',
  styleUrl: './add-formation.css',
})
export class AddFormation {
  @Output() save = new EventEmitter<workshopi>();
  @Output() cancel = new EventEmitter<void>();

  tagsInput: string = '';

  formation: workshopi = {
    id: '',
    titre: '',
    tags: [],
    description: '',
    imageUrl: '',
    niveau: '',
    dateDebut: '',
    dateFin: '',
    formateur: '',
    nombreEtudiants: 0,
    sessions: []
  };

  onSave(): void {
    if (this.validateForm()) {
      this.formation.tags = this.tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      this.save.emit(this.formation);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  validateForm(): boolean {
    return !!(
      this.formation.titre &&
      this.formation.description &&
      this.formation.imageUrl &&
      this.formation.niveau
    );
  }
}
