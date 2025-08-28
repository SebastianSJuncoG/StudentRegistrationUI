import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../../src/app/features/programs/services/student/student.service';

@Component({
  selector: 'app-student-form-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form-modal.component.html',
  styleUrl: './student-form-modal.component.css'
})
export class StudentFormModalComponent {
  @Input() student: any;

  constructor(public activeModal: NgbActiveModal, private studentService: StudentService) {}

  save(): void {
    this.studentService.updateStudent(this.student).subscribe({
      next: (response) => {
        console.log('Estudiante actualizado con éxito', response);
        this.activeModal.close(this.student);
      },
      error: (error) => {
        console.error('Error al actualizar el estudiante', error);
      }
    });
  }
}
