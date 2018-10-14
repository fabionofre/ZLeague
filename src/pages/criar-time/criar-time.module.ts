import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarTimePage } from './criar-time';

@NgModule({
  declarations: [
    CriarTimePage,
  ],
  imports: [
    IonicPageModule.forChild(CriarTimePage),
  ],
})
export class CriarTimePageModule {}
