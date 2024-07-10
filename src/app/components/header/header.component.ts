import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/projects.model';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() projectSelected = new EventEmitter<number>();
  projects: Project[] = [];
  navbarOpen = false;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
      },
      error: (err) => {
        console.error('Failed to fetch projects', err);
      }
    });
  }

  selectProject(id: number) {
    this.projectSelected.emit(id);
  }

  sendProjectId(id: number) {
    this.selectProject(id);
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  navigateToAllDependencies() {
    this.router.navigate(['/all-dependencies']);
  }
}
