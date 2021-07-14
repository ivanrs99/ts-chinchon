import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jugar3PageRoutingModule } from './jugar3-routing.module';

import { Jugar3Page } from './jugar3.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jugar3PageRoutingModule
  ],
  declarations: [Jugar3Page]
})
export class Jugar3PageModule {}
