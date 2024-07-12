import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from 'src/app/services/repository.service';
@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {
  repository: any;

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
