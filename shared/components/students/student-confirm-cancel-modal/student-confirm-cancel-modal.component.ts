import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../../src/app/features/programs/services/student/student.service';

@Component({
  selector: 'app-student-confirm-cancel-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-confirm-cancel-modal.component.html',
  styleUrl: './student-confirm-cancel-modal.component.css'
})
export class StudentConfirmCancelModalComponent {
  @Input() student: any;

  constructor(public activeModal: NgbActiveModal, private studentService: StudentService) {}

  confirmDelete(): void {
    this.activeModal.close(true);
    // this.studentService.deleteStudent(this.student).subscribe({
    //   next: (response) => {
    //     console.log('Estudiante ha eliminado con éxito', response);
    //     this.activeModal.close(this.student);
    //   },
    //   error: (error) => {
    //     console.error('Error al eliminar el estudiante', error);
    //   }
    // });
    // this.activeModal.close(this.student);
  }
}
