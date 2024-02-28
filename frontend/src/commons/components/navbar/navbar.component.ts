import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() opened!: boolean;
  @Input() user!: any;
  @Input() stages!: any;
  @Output() taskAdd = new EventEmitter<void>();

  sidebarShown = false;

  addTask(): void {
    this.taskAdd.emit();
  }

  open(): void {
    this.sidebarShown = true;
  }

  close(): void {
    this.sidebarShown = false;
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }
}
