import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentConfirmCancelModalComponent } from './student-confirm-cancel-modal.component';

describe('StudentConfirmCancelModalComponent', () => {
  let component: StudentConfirmCancelModalComponent;
  let fixture: ComponentFixture<StudentConfirmCancelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentConfirmCancelModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentConfirmCancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
