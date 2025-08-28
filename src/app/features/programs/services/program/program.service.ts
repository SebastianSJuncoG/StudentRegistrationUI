import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Program } from '../../models/program/program.model';
import { ApiResponse } from '../../../../../../shared/models/api-response.model';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../../../environments/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.programs}`;

  constructor(private http: HttpClient) { }

  getPrograms(): Observable<ApiResponse<Program[]>> {
    return this.http.get<ApiResponse<Program[]>>(this.apiUrl);
  }
}
