import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class User_crudService {
  private baseUrl = 'http://localhost:8087/utilisateur';


constructor(private http:HttpClient) { }

adduser(u:user):Observable<object>{
  return this.http.post("http://localhost:8087/utilisateur" ,u).pipe()
}

}
