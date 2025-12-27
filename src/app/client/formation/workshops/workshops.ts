import { Component, EventEmitter, Input, Output } from '@angular/core';
import { workshopi } from '../../../commun/Interface-workshop';

@Component({
  selector: 'app-workshops',
  imports: [],
  templateUrl: './workshops.html',
  styleUrl: './workshops.css',
})
export class Workshops {
  @Input({required: true}) workshop!: workshopi;
  @Output() details = new EventEmitter<number>();
  @Output() back = new EventEmitter<void>();
  test: number = -1;
  
  onVoirDetails() {
    this.test = parseInt(this.workshop.id);
    this.details.emit(parseInt(this.workshop.id));
  }
  
  onBack() {
    this.test = -1;
    this.back.emit();
  }
}