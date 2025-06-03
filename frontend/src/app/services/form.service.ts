import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FormData {
  id?: number;  // Optional for new submissions
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'any'
})
export class FormService {
  private apiUrl = 'http://localhost:8080/api/forms';

  constructor(private http: HttpClient) { }
  
  submitForm(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  getAllForms(): Observable<FormData[]> {
    return this.http.get<FormData[]>(this.apiUrl);
  }
}




