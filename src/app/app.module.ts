import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { LivroModule } from './livro/livro.module';
import { LoginFormComponent } from './login/login-form.component';
import { RegisterFormComponent } from './login/register-form.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LocalStorageService } from './localStorage/local-storage.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LivroModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
   LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
