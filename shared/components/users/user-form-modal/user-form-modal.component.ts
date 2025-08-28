import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../src/app/features/programs/services/user/user.service';
import { addUser } from '../../../../src/app/features/programs/models/user/addUser.model';

@Component({
  selector: 'app-user-form-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form-modal.component.html',
  styleUrl: './user-form-modal.component.css'
})
export class UserFormModalComponent {
  @Input() user: addUser = {
    userName: '',
    tempPassword: '',
    typeUser: 1,
    firstName: '',
    lastName: '',
    email: '',
    idIdentificationType: 0,
    documentNumber: ''
  };

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {}

  save(): void {
    this.userService.addUser(this.user).subscribe({
      next: (response) => {
        console.log('Estudiante creado con éxito', response);
        this.activeModal.close(this.user);
      },
      error: (error) => {
        console.error('Error al crear el registro', error);
      }
    });
  }
}
