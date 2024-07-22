import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchInput = inputElement.value.toLowerCase();
    const allRepositories = document.querySelectorAll<HTMLElement>('.list-group-item');
    const allDependencies = document.querySelectorAll<HTMLElement>('.list-group-item');

    allRepositories.forEach(repository => {
      repository.style.display = repository.textContent?.toLowerCase().includes(searchInput) ? '' : 'none';
    });

    allDependencies.forEach(dependency => {
      dependency.style.display = dependency.textContent?.toLowerCase().includes(searchInput) ? '' : 'none';
    });
  }
}
 