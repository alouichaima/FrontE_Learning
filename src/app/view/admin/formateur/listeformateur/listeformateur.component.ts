import { FormateurService } from './../../../../services/formateur.service';
import { Component, OnInit } from '@angular/core';
import { formateur } from 'src/app/models/formateur.model';
import { DeleteformateurComponent } from '../deleteformateur/deleteformateur.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listeformateur',
  templateUrl: './listeformateur.component.html',
  styleUrls: ['./listeformateur.component.css']
})
export class ListeformateurComponent implements OnInit{

  allFormateursSource: formateur[] = [];
  displayedColumns: string[] = ['nom', 'prenom', 'email', 'datenaiss', 'telephone', 'photo', 'actions'];

  constructor(private formateurService: FormateurService ,     public dialog: MatDialog) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.formateurService.get().subscribe((data) => {
      this.allFormateursSource = data;
    });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteformateurComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allFormateursSource = this.allFormateursSource.filter(
          (_) => _.id !== id
        );
      }
    });
  }


}
