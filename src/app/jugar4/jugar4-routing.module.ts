import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugar4Page } from './jugar4.page';

const routes: Routes = [
  {
    path: '',
    component: Jugar4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jugar4PageRoutingModule {}
