import {
  Component,
  ElementRef,
  ComponentFactoryResolver,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InteractvieComponent } from '../interactvie/interactvie.component';
import { TestComponent } from '../test/test.component';
//<app-test class="app-test"></app-test>
@Component({
  selector: 'app-model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css'],
})
export class ModelDialogComponent implements OnInit {
  selectedComponent: string = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {}

  ngOnInit() {}

  @ViewChild('app_interactvie', { static: true }) interRef!: ElementRef;
  @ViewChild('canvas_PRef', { read: ViewContainerRef })
  canvas_PRef!: ViewContainerRef;

  //<app-interactvie #interactive class="app-test"></app-interactvie>
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  addComponent(): void {
    this.canvas_PRef.clear(); // Clear any previously added component

    if (this.selectedComponent === 'Interact') {
      //const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentAComponent);
      this.canvas_PRef.createComponent(InteractvieComponent);
    } else if (this.selectedComponent === 'Test') {
      //const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentBComponent);
      this.canvas_PRef.createComponent(TestComponent);
    }
  }
}
