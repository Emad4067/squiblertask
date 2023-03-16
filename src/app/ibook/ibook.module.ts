import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { IbookContentComponent } from './ibook-content/ibook-content.component';
import { QuillModule } from 'ngx-quill';
import { IbookMeaningDrawerComponent } from './ibook-meaning-drawer/ibook-meaning-drawer.component';
import { IbookShareFormComponent } from './ibook-share-form/ibook-share-form.component';

@NgModule({
  declarations: [
    IbookContentComponent,
    IbookMeaningDrawerComponent,
    IbookShareFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    QuillModule.forRoot()
  ],
})
export class IBookModule {}
