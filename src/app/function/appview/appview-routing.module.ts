import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppviewPage } from './appview.page';

const routes: Routes = [
  {
    path: '',
    component: AppviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppviewPageRoutingModule {}
