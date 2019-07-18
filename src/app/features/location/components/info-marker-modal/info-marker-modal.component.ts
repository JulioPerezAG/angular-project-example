import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { SackInformationInterface } from '../../models/sack-information.interface';

@Component({
  selector: 'app-info-marker-modal',
  templateUrl: './info-marker-modal.component.html'
})
export class InfoMarkerModalComponent {

  constructor(private dialogRef: MatDialogRef<InfoMarkerModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SackInformationInterface) {
  }
}
