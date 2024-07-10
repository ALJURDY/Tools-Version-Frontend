import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dependency } from 'src/app/models/dependency.model';
import { DependencyService } from 'src/app/services/dependency.service';

@Component({
  selector: 'app-dependency-details',
  templateUrl: './dependency-details.component.html',
  styleUrls: ['./dependency-details.component.css']
})
export class DependencyDetailsComponent {
  dependency:Dependency | undefined;

  constructor(
    private dependencyService: DependencyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');

        this.loadDependency(name);
    });
  }

  loadDependency(name:string | null) {
    this.dependencyService.getDependencyByName(name).subscribe(data => {
      this.dependency = data;
    });
  }

}
