import { Injectable } from '@angular/core';
import { Sessionn } from '../../../commun/Interface-session';
import { workshopi } from '../../../commun/Interface-workshop';
import { ServiceDataCommun } from '../../../commun/service-data-commun';

@Injectable({
  providedIn: 'root'
})
export class ServiceSession {
  constructor(private dataService: ServiceDataCommun) {}

  getSessionsByWorkshop(workshopId: string): Sessionn[] {
    const workshops = this.dataService.getDataWorkshops();
    const workshop = workshops.find(w => w.id === workshopId);
    return workshop?.sessions || [];
  }

  addSession(workshopId: string, session: Sessionn): void {
    const workshops = this.dataService.getDataWorkshops();
    const workshop = workshops.find(w => w.id === workshopId);
    if (workshop) {
      session.id = workshopId + '-' + (workshop.sessions.length + 1);
      workshop.sessions.push(session);
      this.dataService.saveWorkshopsData(workshops);
    }
  }

  updateSession(workshopId: string, session: Sessionn): void {
    const workshops = this.dataService.getDataWorkshops();
    const workshop = workshops.find(w => w.id === workshopId);
    if (workshop) {
      const index = workshop.sessions.findIndex(s => s.id === session.id);
      if (index !== -1) {
        workshop.sessions[index] = session;
        this.dataService.saveWorkshopsData(workshops);
      }
    }
  }

  deleteSession(workshopId: string, sessionId: string): void {
    const workshops = this.dataService.getDataWorkshops();
    const workshop = workshops.find(w => w.id === workshopId);
    if (workshop) {
      workshop.sessions = workshop.sessions.filter(s => s.id !== sessionId);
      this.dataService.saveWorkshopsData(workshops);
    }
  }
}
