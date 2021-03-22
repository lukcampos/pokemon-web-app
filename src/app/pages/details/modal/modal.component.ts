import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Attack } from "../../../models/card/card.model"
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Attack,
    public dialogRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit(): void {
    console.log('data', this.data)
  }

  closeBtn() {
    this.dialogRef.close()
  }

}
