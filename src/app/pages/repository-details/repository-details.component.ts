import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from 'src/app/models/repository.model';
import { RepositoryService } from 'src/app/services/repository.service';
@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {
  repository: Repository | undefined;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService,
    private router: Router
  ) { }

  returnToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name !== null) {
      this.repositoryService.getRepositoryByName(name).subscribe(data => {
        this.repository = data;
        this.repository.dependencies.forEach((dep: { id: number; }) => {
          this.repositoryService.getCurrentVersion(this.repository!.id, dep.id).subscribe(data => {
            this.repository!.dependencies[dep.id-1].cv = data.currentVersion
          });
        });
      });
    } else {
      console.error('Repository name is null');
    }
  }

  getButtonColor(percentage: number): string {
    if (percentage >= 75) {
      return 'green';
    } else if (percentage >= 50) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  
}
