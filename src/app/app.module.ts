import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorProvider } from './core/services/interceptor.service';
import { UserProvider } from './domain/users/user.provider';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule
  ],
  providers: [InterceptorProvider, UserProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
