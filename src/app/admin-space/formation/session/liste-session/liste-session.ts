import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { workshopi } from '../../../../commun/Interface-workshop';
import { Sessionn } from '../../../../commun/Interface-session';
import { Formateur } from '../../../../commun/Interface-formateur';
import { ServiceDataCommun } from '../../../../commun/service-data-commun';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddSession } from '../add-session/add-session';
import { EditSession } from '../edit-session/edit-session';
import { ServiceSession } from '../service-session';

@Component({
  selector: 'app-liste-session',
  imports: [CommonModule, RouterModule, AddSession, EditSession],
  templateUrl: './liste-session.html',
  styleUrl: './liste-session.css'
})
export class ListeSession implements OnInit {
  workshopId: string = '';
  workshop?: workshopi;
  sessions: Sessionn[] = [];
  formateurs: Formateur[] = [];
  showAdd = false;
  showEdit = false;
  selectedSession: Sessionn | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: ServiceDataCommun,
    private sessionService: ServiceSession
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.workshopId = params['workshopId'];
      this.loadData();
    });
  }

  loadData() {
    const workshops = this.dataService.getDataWorkshops();
    this.workshop = workshops.find(w => w.id === this.workshopId);
    
    if (this.workshop) {
      this.sessions = this.sessionService.getSessionsByWorkshop(this.workshopId);
    }
    
    this.formateurs = this.dataService.getDataFormateurs();
  }

  onAddSession(): void {
    this.showAdd = true;
    this.showEdit = false;
    this.selectedSession = null;
  }

  onEditSession(session: Sessionn): void {
    this.selectedSession = {...session};
    this.showEdit = true;
    this.showAdd = false;
  }

  onDeleteSession(sessionId: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
      this.sessionService.deleteSession(this.workshopId, sessionId);
      this.loadData();
    }
  }

  onSaveAdd(session: Sessionn): void {
    this.sessionService.addSession(this.workshopId, session);
    this.loadData();
    this.showAdd = false;
  }

  onSaveEdit(session: Sessionn): void {
    this.sessionService.updateSession(this.workshopId, session);
    this.loadData();
    this.showEdit = false;
    this.selectedSession = null;
  }

  onCancel(): void {
    this.showAdd = false;
    this.showEdit = false;
    this.selectedSession = null;
  }

  getTotalStudents(): number {
    return this.sessions.reduce((total, session) => total + session.nombreEtudiants, 0);
  }

  getFormateur(session: Sessionn): Formateur | undefined {
    if (!session.formateur) return undefined;
    return this.formateurs.find(f => f.id === session.formateur);
  }

  goBack(): void {
    this.router.navigate(['/admin-space/formation']);
  }
}