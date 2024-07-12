import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent {
  @Input() repositories: Repository[] = [];

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
