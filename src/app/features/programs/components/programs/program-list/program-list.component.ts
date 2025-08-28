import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Program } from '../../../models/program/program.model';

@Component({
  selector: 'app-program-list',
  imports: [CommonModule],
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.css'
})
export class ProgramListComponent {
  @Input() programs: Program[] = [];
  @Output() edit = new EventEmitter<Program>();
  @Output() delete = new EventEmitter<Program>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['programs'] && this.programs) {
    }
  }
}
