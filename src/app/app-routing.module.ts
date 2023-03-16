import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IbookContentComponent } from './ibook/ibook-content/ibook-content.component';
import { IbookShareFormComponent } from './ibook/ibook-share-form/ibook-share-form.component';

const routes: Routes = [
  {
    path: '',
    component: IbookContentComponent,
  },
  {
    path: 'share',
    component: IbookShareFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
