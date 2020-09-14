import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppviewPageRoutingModule } from './appview-routing.module';

import { AppviewPage } from './appview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppviewPageRoutingModule
  ],
  declarations: [AppviewPage]
})
export class AppviewPageModule {}
