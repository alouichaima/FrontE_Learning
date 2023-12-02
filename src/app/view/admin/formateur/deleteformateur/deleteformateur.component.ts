import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material/dialog';
import { FormateurService } from 'src/app/services/formateur.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { inject } from '@angular/core';

@Component({
  selector: 'app-deleteformateur',
  templateUrl: './deleteformateur.component.html',
  styleUrls: ['./deleteformateur.component.css']
})
export class DeleteformateurComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteformateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formateurService: FormateurService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
   this.formateurService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
