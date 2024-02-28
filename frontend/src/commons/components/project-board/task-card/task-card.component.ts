import { Component, Input } from '@angular/core';
import { Candidate } from '../../../models/candidate.model';

@Component({
  selector: 'app-candidate-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() candidate!: Candidate;

}
