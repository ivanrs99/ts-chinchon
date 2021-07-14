import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jugar4PageRoutingModule } from './jugar4-routing.module';

import { Jugar4Page } from './jugar4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jugar4PageRoutingModule
  ],
  declarations: [Jugar4Page]
})
export class Jugar4PageModule {}
