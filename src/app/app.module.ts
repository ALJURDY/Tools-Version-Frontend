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
import { AllDependenciesComponent } from './pages/allDependencies/allDependencies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthenticationService } from './services/authentication.service';
import { JwtInterceptor } from './core/jwt.interceptor';
import { RepositoryDetailsComponent } from './pages/repository-details/repository-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchBarComponent,
    ButtonsComponent,
    RepositoriesComponent,
    AllDependenciesComponent,
    LoginComponent,
    SignupComponent,
    RepositoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  exports: [
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
