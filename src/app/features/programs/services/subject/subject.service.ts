import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../../../../../../shared/models/api-response.model';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../../../environments/api.config';
import { subject } from '../../models/subjects/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.subject}`;

  constructor(private http: HttpClient) { }

  getSubjectsByStudentId(idStudent: string): Observable<ApiResponse<subject[]>> {
    const params = new HttpParams().set('idStudent', idStudent);

    return this.http.get<ApiResponse<subject[]>>(this.apiUrl, { params: params });
  }
}
