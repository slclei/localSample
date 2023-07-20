import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//<app-test class="app-test"></app-test>
@Component({
  selector: 'app-model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css']
})
export class ModelDialogComponent implements OnInit{

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ModelDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) {
    }

    ngOnInit() {
    }

    @ViewChild('app_interactvie',{static:true}) interRef!:ElementRef;
//<app-interactvie #interactive class="app-test"></app-interactvie>
    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

}
