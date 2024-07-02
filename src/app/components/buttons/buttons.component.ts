import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() showAllDependencies: boolean = false;
  @Input() showClearCache: boolean = false;
  @Input() showReturnToHome: boolean = false;
  @Input() showPercentage: boolean = false;
}
