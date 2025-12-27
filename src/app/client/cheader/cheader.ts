import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxCircularTextComponent } from '@omnedia/ngx-circular-text';

@Component({
  selector: 'app-cheader',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgxCircularTextComponent],
  templateUrl: './cheader.html',
  styleUrl: './cheader.css',
})
export class CHeader {

}
