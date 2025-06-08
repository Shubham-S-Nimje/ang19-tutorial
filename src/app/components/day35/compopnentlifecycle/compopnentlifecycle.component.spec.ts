import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompopnentlifecycleComponent } from './compopnentlifecycle.component';

describe('CompopnentlifecycleComponent', () => {
  let component: CompopnentlifecycleComponent;
  let fixture: ComponentFixture<CompopnentlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompopnentlifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompopnentlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
