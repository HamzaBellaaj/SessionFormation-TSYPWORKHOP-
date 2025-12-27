import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Formateur } from '../../../commun/Interface-formateur';

@Component({
  selector: 'app-edit-formateur',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-formateur.html',
  styleUrl: './edit-formateur.css',
})
export class EditFormateur implements OnInit {
  @Input() formateur!: Formateur;
  @Output() save = new EventEmitter<Formateur>();
  @Output() cancel = new EventEmitter<void>();

  editForm!: Formateur;

  ngOnInit() {
    this.editForm = {...this.formateur};
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
    return !!(this.editForm.nom && this.editForm.prenom && this.editForm.mail);
  }
}
