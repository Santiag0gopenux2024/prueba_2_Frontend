import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
