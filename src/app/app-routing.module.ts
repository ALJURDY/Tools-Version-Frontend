import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllDependenciesComponent } from './pages/allDependencies/allDependencies.component';
import { RepositoryDetailsComponent } from './pages/repository-details/repository-details.component';
import { DependencyDetailsComponent } from './pages/dependency-details/dependency-details.component';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'all-dependencies', component: AllDependenciesComponent, canActivate: [AuthGuard] },
  { path: 'dependency/:name', component: DependencyDetailsComponent, canActivate: [AuthGuard] },
  { path: 'repository/:name', component: RepositoryDetailsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
