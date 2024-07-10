import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDependenciesComponent } from './allDependencies.component';

describe('DependencyComponent', () => {
  let component: AllDependenciesComponent;
  let fixture: ComponentFixture<AllDependenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDependenciesComponent]
    });
    fixture = TestBed.createComponent(AllDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
