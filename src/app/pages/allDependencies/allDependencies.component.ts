import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dependency } from 'src/app/models/dependency.model';
import { DependencyService } from 'src/app/services/dependency.service';

@Component({
  selector: 'app-allDependencies',
  templateUrl: './allDependencies.component.html',
  styleUrls: ['./allDependencies.component.css']
})
export class AllDependenciesComponent implements OnInit {

  allDependencies : Dependency[] = []

  constructor(
    private dependencyService: DependencyService,
    private router: Router
  ) {}

  returnToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.loadDependencies(); 
  }

  loadDependencies() {
    this.dependencyService.getAllDependencies().subscribe(data => {
      this.allDependencies = data;
    });
  }
}
 