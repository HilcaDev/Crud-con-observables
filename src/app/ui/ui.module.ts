import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UsersComponent } from './users/users.component';
import { UserProvider } from '../domain/users/user.provider';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[UsersComponent],
  providers: [UserProvider]
})
export class UiModule { }
