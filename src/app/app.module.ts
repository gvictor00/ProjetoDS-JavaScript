import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UsrComponent } from './usr/usr.component';
import { ArquivosComponent } from './arquivos/arquivos.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppRoutingModule,
    UsrComponent,
    ArquivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
