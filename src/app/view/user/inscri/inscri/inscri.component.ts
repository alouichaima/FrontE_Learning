import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  datenaissance: string = '';
  telephone: string = '';
  selectedRole: string = '';

  constructor(private http: HttpClient) {}

  save() {
    const bodyData = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
      datenaissance: this.datenaissance,
      telephone: this.telephone,
      role: [this.selectedRole]
    };

    let apiUrl = '';
    if (this.selectedRole === 'APPRENANT') {
      apiUrl = 'http://localhost:8069/api/auth/signupApprenant';
    } else if (this.selectedRole === 'FORMATEUR') {
      apiUrl = 'http://localhost:8069/api/auth/signupFormateur';
    }

    this.http.post(apiUrl, bodyData, { responseType: 'text' })
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          alert('User inscrie avec succées ');
        },
        (error) => {
          console.error('Error during HTTP request:', error);
          alert('Echec lors d inscription');
        }
      );
  }
}
