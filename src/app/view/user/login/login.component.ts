import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient) {}

  Login() {
    console.log(this.email);
    console.log(this.password);

    const bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:8069/api/auth/login", bodyData).subscribe(
      (resultData: any) => {
        console.log("Server Response:", resultData);

        if (resultData.message === "Email not exists") {
          alert("Email does not exist");
        } else if (resultData.message === "Login Success" && resultData.status === true) {
          console.log("Login successful");

          // Inspectez la réponse complète pour identifier la propriété correcte pour le rôle
          console.log("Full Response:", resultData);

          // Adapté en fonction de la structure réelle de la réponse du serveur
          const userRole = resultData.userRole;

          if (userRole ==="ADMIN") {
            console.log("admin");
            this.router.navigate(['/admin/dashboard']);
          } else if (userRole === "FORMATEUR") {
            this.router.navigateByUrl('/profile');
          } else if (userRole === "APPRENANT") {
            this.router.navigateByUrl('/apprenant');
          } else {
            console.error("Unknown user role or role not defined");
            // Ajoutez ici la logique pour traiter les autres cas (par exemple, rediriger vers une page par défaut)
          }
        } else {
          alert("Incorrect Email and Password combination");
        }
      },
      (error: any) => {
        console.error("Error during HTTP request:", error);
      }
    );
  }



}


