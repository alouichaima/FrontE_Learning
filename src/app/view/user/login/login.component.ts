import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string ="";
  constructor(private router: Router,private http: HttpClient) {}

  Login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

        this.http.post("http://localhost:8069/api/auth/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        if (resultData.message == "Email not exits")
        {

          alert("Email not exits");


        }
        else if(resultData.message == "Login Success")

         {
          this.router.navigateByUrl('/formation');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }

      },
      (error: any) => {
        console.error("Erreur lors de la requête HTTP :", error);
        // try {
        //   // Vérifier si la réponse est au format JSON
        //   if (error.error && typeof error.error === 'object') {
        //     console.log(error.error);
        //   } else {
        //     console.log("La réponse n'est pas au format JSON. Contenu de la réponse :", error.error);
        //   }
        // } catch (e) {
        //   console.log("La réponse n'est pas au format JSON. Contenu de la réponse :", error.error);
        // }


      }

      );
    }



}
