import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User_crudService } from 'src/app/services/user_crud.service';
import { formateur } from 'src/app/models/formateur.model';
import { FormateurService } from 'src/app/services/formateur.service';


@Component({
  selector: 'app-addformateur',
  templateUrl: './addformateur.component.html',
  styleUrls: ['./addformateur.component.css']
})
export class AddformateurComponent implements OnInit  {

  formateurForm: formateur = {
    // id: 0,
    nom: '',
    prenom: '',
    datenaiss : '',
    email:'',
    telephone: '',
    photo:'',
  };

  constructor(
    private formateurService: FormateurService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create() {

    this.formateurService.create(this.formateurForm).subscribe(() => {
      this.router.navigate(['/admin/listeformateur']);
    });
  }

}
