import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class BoardComponent {
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
