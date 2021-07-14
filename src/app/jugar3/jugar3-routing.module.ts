import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugar3Page } from './jugar3.page';

const routes: Routes = [
  {
    path: '',
    component: Jugar3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jugar3PageRoutingModule {}
