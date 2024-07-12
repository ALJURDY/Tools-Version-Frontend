import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  returnToHome() {
    this.router.navigate(['/home']);
  }

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
