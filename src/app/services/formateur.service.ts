import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formateur } from '../models/formateur.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private httpClient:HttpClient) { }

  get(): Observable<formateur[]> {
    return this.httpClient.get<formateur[]>('http://localhost:8069/formateur/all');
   }

   create(payload: formateur) {
    return this.httpClient.post<formateur>('http://localhost:8069/formateur/add', payload)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de la création du formateur', error);
          return throwError(error);
        })
      );
  }

  getById(id: number): Observable<formateur> {
    return this.httpClient.get<formateur>(`http://localhost:8069/formateur/${id}`);
  }

  update(payload: formateur): Observable<formateur> {
   return this.httpClient.put<formateur>(
    `http://localhost:8069/formateur/${payload.id}`,
    payload
   );
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:8069/formateur/${id}`);
   }


}
