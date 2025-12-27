import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sessionn } from 'src/app/commun/Interface-session';
import { ServiceDataCommun } from 'src/app/commun/service-data-commun';

@Component({
  selector: 'app-new-inscri',
  templateUrl: './new-inscri.html',
  styleUrl: './new-inscri.css',
})
export class NewInscri {
  @Input() session!: Sessionn;
  @Input() workshopId!: string;
  @Output() close = new EventEmitter<void>();
  
  constructor(private service: ServiceDataCommun) {}
  
  annuler() {
    this.close.emit();
  }
  
  sInscrire() {
    // Vérifier si la session n'est pas pleine
    if (this.session.nombreEtudiants >= 15) {
      alert("Désolé, toutes les places sont prises !");
      this.close.emit();
      return;
    }

    // Récupérer tous les workshops
    const workshops = this.service.getDataWorkshops();
    
    // Trouver le workshop
    const workshop = workshops.find(w => w.id === this.workshopId);
    if (!workshop) {
      alert("Erreur : workshop non trouvé");
      this.close.emit();
      return;
    }
    
    // Trouver la session dans le workshop
    const session = workshop.sessions.find(s => s.id === this.session.id);
    if (!session) {
      alert("Erreur : session non trouvée");
      this.close.emit();
      return;
    }
    
    // Incrémenter le nombre d'étudiants
    session.nombreEtudiants = session.nombreEtudiants + 1;
    
    // Sauvegarder dans localStorage
    this.service.saveWorkshopsData(workshops);
    
    alert("Inscription réussie !");
    this.close.emit();
  }
}