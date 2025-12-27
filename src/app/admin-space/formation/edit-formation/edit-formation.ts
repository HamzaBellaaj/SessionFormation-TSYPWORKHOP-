import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { workshopi } from '../../../commun/Interface-workshop';

@Component({
  selector: 'app-edit-formation',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-formation.html',
  styleUrl: './edit-formation.css',
})
export class EditFormation implements OnInit {
  @Input() formation!: workshopi;
  @Output() save = new EventEmitter<workshopi>();
  @Output() cancel = new EventEmitter<void>();

  editForm!: workshopi;
  tagsInput: string = '';

  ngOnInit() {
    this.editForm = {...this.formation};
    // Convertir les tags en string pour l'input
    this.tagsInput = this.editForm.tags?.join(', ') || '';
  }

  onSave(): void {
    if (this.validateForm()) {
      // Convertir tagsInput en tableau
      this.editForm.tags = this.tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      this.save.emit(this.editForm);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  validateForm(): boolean {
    return !!(
      this.editForm.titre &&
      this.editForm.description &&
      this.editForm.imageUrl &&
      this.editForm.niveau
    );
  }
}
