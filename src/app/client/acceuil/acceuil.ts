import { Component } from '@angular/core';
import { CHeader } from '../cheader/cheader';
import { ClientRoutingModule } from "../client-routing-module";

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CHeader, ClientRoutingModule],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css',
})
export class Acceuil {

}
