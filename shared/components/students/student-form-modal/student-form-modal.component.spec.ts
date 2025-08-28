import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormModalComponent } from './student-form-modal.component';

describe('StudentFormModalComponent', () => {
  let component: StudentFormModalComponent;
  let fixture: ComponentFixture<StudentFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
