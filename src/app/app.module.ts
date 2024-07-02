import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FormsModule } from '@angular/forms';
import { DependenciesComponent } from './pages/dependencies/dependencies.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchBarComponent,
    ButtonsComponent,
    RepositoriesComponent,
    DependenciesComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
