import { Component } from '@angular/core';
import { CHeader } from '../cheader/cheader';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CHeader, RouterModule],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css',
})
export class Acceuil {

}
