import { Component, Input } from '@angular/core';
import { Repositories, REPOSITORIES_LIST } from 'src/app/mocks/repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent {
  @Input() repositories: Repositories[] = [];
}
