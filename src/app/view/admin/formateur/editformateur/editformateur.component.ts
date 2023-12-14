import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formateur } from 'src/app/models/formateur.model';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-editformateur',
  templateUrl: './editformateur.component.html',
  styleUrls: ['./editformateur.component.css']
})
export class EditformateurComponent implements OnInit {

  formateurForm: formateur = {
    // id: 0,
    nom: '',
    prenom: '',
    datenaiss : '',
    email:'',
    telephone: '',
    photo:'',
  };
  displayedColumns: string[] = ['nom', 'prenom',  'email', 'datenaiss', 'telephone','photo'];


  constructor(
    private formateurService: FormateurService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const formateurId = params['id'];
      this.getById(formateurId); // Utilisez l'ID du formateur pour obtenir ses détails
    });
  }


  getById(id: number) {
    this.formateurService.getById(id).subscribe((data) => {
      this.formateurForm = data;
    });
  }

  update() {
    this.formateurService.update(this.formateurForm).subscribe(() => {
      this.router.navigate(['/admin/listeformateur']);
    });
  }

}
