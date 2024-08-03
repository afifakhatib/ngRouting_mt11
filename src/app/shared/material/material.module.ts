import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';


const MaterialModuleArr = [
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatListModule,
      MatDividerModule,
      MatSnackBarModule,
      MatDialogModule,
      MatRadioModule,
      MatSelectModule,
      MatCheckboxModule,
      MatIconModule,
      MatChipsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialModuleArr
  ],
  exports : [
    ...MaterialModuleArr
  ]
})
export class MaterialModule { }
