import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modelos
import { student } from '../../../models/student/student.model';
import { addUser } from '../../../models/user/addUser.model';
// Componentes
import { StudentListComponent } from '../../../components/programs/student-list/student-list.component';
// Servicios
import { StudentService } from '../../../services/student/student.service';
import { UserService } from '../../../services/user/user.service';
import { ModalService } from '../../../../../../../shared/services/modal/modal.service';
// Modales
import { StudentFormModalComponent } from '../../../../../../../shared/components/students/student-form-modal/student-form-modal.component';
import { StudentConfirmCancelModalComponent } from '../../../../../../../shared/components/students/student-confirm-cancel-modal/student-confirm-cancel-modal.component';
import { AlertModalComponent } from '../../../../../../../shared/components/general/alert-modal/alert-modal.component';
import { UserFormModalComponent } from '../../../../../../../shared/components/users/user-form-modal/user-form-modal.component';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [StudentListComponent, CommonModule],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent {
  students: student[] = [];

  constructor(private studentService: StudentService, private userService: UserService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getStudents(1, 10).subscribe(response => {
      this.students = response.data;
    });
  }

  onEditStudent(student: student): void {
    const modalRef = this.modalService.open(StudentFormModalComponent);

    modalRef.componentInstance.student = student;

    modalRef.result.then(
      (result) => {
        if(result.userId !== null){
          this.showAlert('El estudiante se ha editado con exito.');
        }else{
          this.showAlert('Error al editar el registro.');
        }
      },
      (reason) => {
      }
    );
  }

  onDeleteStudent(student: student): void {
    const modalRef = this.modalService.open(StudentConfirmCancelModalComponent);
    modalRef.componentInstance.student = student;

    modalRef.result.then(
      (result) => {
        // El modal se cerró con el botón 'Eliminar'
        if (result === true) {
          // Llama al servicio de eliminación y pasa ÚNICAMENTE el ID
          this.studentService.deleteStudent(student.idStudents).subscribe({
            next: () => {
              console.log('Estudiante eliminado con éxito');
              this.showAlert('El estudiante se ha eliminado con exito.');
              this.getAllStudents();
            },
            error: (error) => {
              console.error('Error al eliminar el estudiante', error);
              this.showAlert('Error al eliminar el registro.');
            }
          });
        }
      },
      (reason) => {
        // Lógica si el modal se cerró sin confirmar
        console.log('Eliminación cancelada:', reason);
      }
    );
  }

  onCreateStudent(user: addUser): void{
    const modalRef = this.modalService.open(UserFormModalComponent);

    modalRef.result.then(
      (newUser: addUser) => {
        if (newUser) {
          this.userService.addUser(newUser).subscribe({
            next: () => {
              console.log('Usuario creado con éxito');
              this.showAlert('El usuario se ha creado con éxito.');
              this.getAllStudents(); 
            },
            error: (error) => {
              console.error('Error al crear el usuario', error);
              this.showAlert('Error al crear el registro.');
            }
          });
        }
      },
      (reason) => {
        console.log('Creación de usuario cancelada:', reason);
      }
    );
  }

  private showAlert(mensaje: string): void {
    const modalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.message = mensaje;
  }
}
