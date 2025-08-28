import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { student } from '../../../models/student/student.model';
import { addUser } from '../../../models/user/addUser.model';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  @Input() students: student[] = [];
  @Output() edit = new EventEmitter<student>();
  @Output() delete = new EventEmitter<student>();
  @Output() create = new EventEmitter<addUser>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['students'] && this.students) {
    }
  }

  onCreate(): void {
    // Crea un objeto con los campos mínimos o vacíos
    const newStudent: addUser = {
      userName: '',
      tempPassword: '',
      typeUser: 0,
      firstName: '',
      lastName: '',
      email: '',
      idIdentificationType: 0,
      documentNumber: ''
    };
    this.create.emit(newStudent);
  }
}
