import { Component } from '@angular/core';

//Modelos
import { subject } from '../../../models/subjects/subject.model';
import { student } from '../../../models/student/student.model';

//Servicios
import { SubjectService } from '../../../services/subject/subject.service';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-subject-page',
  imports: [],
  templateUrl: './subject-page.component.html',
  styleUrl: './subject-page.component.css'
})
export class SubjectPageComponent {
  subject: subject[] = [];
  students: student[] = [];

  constructor(private subjectService: SubjectService, private studentService: StudentService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getStudents(1, 10).subscribe(response => {
      this.students = response.data;
    });
  }
}
