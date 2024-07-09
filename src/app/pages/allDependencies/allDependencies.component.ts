import { Component, OnInit } from '@angular/core';
import { Dependency } from 'src/app/models/dependency.model';
import { DependencyService } from 'src/app/services/dependency.service';

@Component({
  selector: 'app-dependencies',
  templateUrl: './allDependencies.component.html',
  styleUrls: ['./allDependencies.component.css']
})
export class DependenciesComponent implements OnInit {

  dependencies : Dependency[] = []

  constructor(private dependencyService: DependencyService) {}

  ngOnInit() {
    this.loadDependencies(); 
  }

  loadDependencies() {
    this.dependencyService.getAllDependencies().subscribe(data => {
      this.dependencies = data;
    });
  }
}
 