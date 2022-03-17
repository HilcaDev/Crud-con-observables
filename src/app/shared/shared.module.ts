import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './custom/modal/modal.component';
import { ContentComponent } from './pages/content/content.component';


@NgModule({
  declarations: [ModalComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ModalComponent, ContentComponent]
})
export class SharedModule { }
