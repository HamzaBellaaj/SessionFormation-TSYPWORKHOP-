import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceDataCommun } from 'src/app/commun/service-data-commun';
import { ServiceCandidat } from 'src/app/admin-space/candidat/service-candidat';
import { Candidats } from 'src/app/commun/Interface-candidat';

@Component({
  selector: 'app-new-inscri',
  templateUrl: './new-inscri.html',
  styleUrl: './new-inscri.css',
  standalone: true,
  imports: [FormsModule]
})
export class NewInscri {
  @Input() workshopId!: string;
  @Input() sessionId!: string;
  @Input() currentEtudiants!: number;
  @Output() close = new EventEmitter<void>();
  
  candidat: Candidats = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    cin: 0,
    photo: '',
    session: ''
  };
  
  constructor(private service: ServiceDataCommun, private serviceCandidatService: ServiceCandidat) {}
  
  annuler() {
    this.close.emit();
  }
  
  sInscrire() {
    if (!this.candidat.nom || !this.candidat.prenom || !this.candidat.email || !this.candidat.cin) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    this.candidat.session = this.sessionId;
    this.serviceCandidatService.addCandidat(this.candidat);
    const workshops = this.service.getDataWorkshops();
    const workshop = workshops.find(w => w.id === this.workshopId);
    const session = workshop.sessions.find(s => s.id === this.sessionId);
    session.nombreEtudiants++;
    this.service.saveWorkshopsData(workshops);
    alert("Inscription réussie !");
    this.close.emit();
  }
}