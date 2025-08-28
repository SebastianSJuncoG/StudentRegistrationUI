import { Injectable, Type } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

  open(content: Type<any>, options?: any): NgbModalRef {
    // Aquí puedes pasar opciones y datos al modal
    const modalRef = this.ngbModal.open(content, options);
    return modalRef;
  }
}
