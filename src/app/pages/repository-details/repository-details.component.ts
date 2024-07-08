import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private repositoryService: RepositoryService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.repositoryService.getRepositoryById(id).subscribe(data => {
        this.repository = data;
      });
    } else {
      console.error('Repository ID is null');
    }
  }
}
