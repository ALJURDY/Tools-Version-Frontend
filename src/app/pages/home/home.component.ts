import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  repositories: Repository[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadRepositories(1); 
  }

  loadRepositories(projectId: number) {
    this.projectService.getRepositoriesByProjectId(projectId).subscribe(data => {
      this.repositories = data;
    });
  }
}
