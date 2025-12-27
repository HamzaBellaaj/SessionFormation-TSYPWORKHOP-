import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Sessionn } from '../../../../commun/Interface-session';
import { Formateur } from '../../../../commun/Interface-formateur';

@Component({
  selector: 'app-edit-session',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-session.html',
  styleUrl: './edit-session.css',
})
export class EditSession implements OnInit {
  @Input() session!: Sessionn;
  @Input() formateurs: Formateur[] = [];
  @Output() save = new EventEmitter<Sessionn>();
  @Output() cancel = new EventEmitter<void>();

  editForm!: Sessionn;

  ngOnInit() {
    this.editForm = {...this.session};
  }

  onSave(): void {
    if (this.validateForm()) {
      this.save.emit(this.editForm);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  validateForm(): boolean {
    return !!(this.editForm.localisation && this.editForm.dateDebut && this.editForm.dateFin);
  }
}
