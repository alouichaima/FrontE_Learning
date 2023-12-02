import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent {
  nom: string ="";
  prenom: string="";
  email: string ="";
  password: string ="";
  datenaissance: string="";
  telephone: string="";
  constructor(private http: HttpClient )
  {
  }
  save()
  {

    let bodyData = {
      "nom" : this.nom,
      "prenom":this.prenom,
      "email" : this.email,
      "password" : this.password,
      "datenaissance": this.datenaissance,
      "telephone":this.telephone
    };
    this.http.post("http://localhost:8069/api/auth/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("user Registered Successfully");
    });
  }

}
