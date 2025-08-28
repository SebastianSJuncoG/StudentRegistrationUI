import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor
import { subject } from '../../../models/subjects/subject.model';

@Component({
  selector: 'app-subject-list',
  imports: [],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  @Input() subjects: subject[] = [];
  @Output() edit = new EventEmitter<subject>();
  @Output() delete = new EventEmitter<subject>();
}
