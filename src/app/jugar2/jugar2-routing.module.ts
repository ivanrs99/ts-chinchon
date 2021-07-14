import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugar2Page } from './jugar2.page';

const routes: Routes = [
  {
    path: '',
    component: Jugar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jugar2PageRoutingModule {}
