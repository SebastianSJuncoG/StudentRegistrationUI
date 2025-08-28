import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../../../../../../shared/models/api-response.model';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../../../environments/api.config';
import { addUser } from '../../models/user/addUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.user}`;

  constructor(private http: HttpClient) { }

    addUser(user: addUser): Observable<any> {
      const url = `${this.apiUrl}`;
  
      return this.http.post<any>(this.apiUrl, user);
    }
}
