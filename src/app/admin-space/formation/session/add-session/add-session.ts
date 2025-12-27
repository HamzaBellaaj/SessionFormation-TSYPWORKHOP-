import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sessionn } from '../../../../commun/Interface-session';

@Component({
  selector: 'app-add-session',
  imports: [FormsModule],
  templateUrl: './add-session.html',
  styleUrl: './add-session.css',
})
export class AddSession {
  @Output() save = new EventEmitter<Sessionn>();
  @Output() cancel = new EventEmitter<void>();

  session: Sessionn = {
    id: '',
    localisation: '',
    heure: '',
    dateDebut: '',
    dateFin: '',
    nombreEtudiants: 0,
    formateur: '',
    formateur1: ''
  };

  onSave(): void {
    if (this.validateForm()) {
      this.save.emit(this.session);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  validateForm(): boolean {
    return !!(this.session.localisation && this.session.dateDebut && this.session.dateFin);
  }
}
