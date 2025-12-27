import { Sessionn } from '../commun/Interface-session';
export interface workshopi {
  id: string;
  titre: string;
  tags?: string[];
  description: string;
  imageUrl: string;
  niveau?: string;
  dateDebut: string;
  dateFin: string;
  formateur: string;
  nombreEtudiants: number;
  sessions: Sessionn[];
}