import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceDataCommun } from 'src/app/commun/service-data-commun';

@Component({
  selector: 'app-new-inscri',
  templateUrl: './new-inscri.html',
  styleUrl: './new-inscri.css',
})
export class NewInscri {
  @Input() workshopId!: string;
  @Input() sessionId!: string;
  @Input() currentEtudiants!: number;
  @Output() close = new EventEmitter<void>();
  
  constructor(private service: ServiceDataCommun) {}
  
  annuler() {
    this.close.emit();
  }
  
  sInscrire() { 
    const workshops = this.service.getDataWorkshops();
    const workshop = workshops.find(w => w.id === this.workshopId); 
    const session = workshop.sessions.find(s => s.id === this.sessionId);    
    session.nombreEtudiants++;
    this.service.saveWorkshopsData(workshops);
    alert("Inscription réussie !");
    this.close.emit();
  }
}