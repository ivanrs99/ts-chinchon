import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jugar2PageRoutingModule } from './jugar2-routing.module';

import { Jugar2Page } from './jugar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jugar2PageRoutingModule
  ],
  declarations: [Jugar2Page]
})
export class Jugar2PageModule {}
