import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../../../../../../shared/models/api-response.model';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../../../environments/api.config';
import { student } from '../../models/student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.students}`;

  constructor(private http: HttpClient) { }

  getStudents(actualPage: number, recordsQuantity: number): Observable<ApiResponse<student[]>> {
    let params = new HttpParams();

    params = params.set('actualPage', actualPage.toString());
    params = params.set('recordsQuantity', recordsQuantity.toString());

    return this.http.get<ApiResponse<student[]>>(this.apiUrl, { params });
  }

  updateStudent(student: student): Observable<any> {
    const url = `${this.apiUrl}/${student.idStudents}`;

    return this.http.put<any>(this.apiUrl, student);
  }

  deleteStudent(studentId: string): Observable<any> {
    const params = new HttpParams().set('id', studentId);

    return this.http.delete<any>(this.apiUrl, { params: params });
  }
}
