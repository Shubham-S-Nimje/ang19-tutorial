import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedsignalsComponent } from './computedsignals.component';

describe('ComputedsignalsComponent', () => {
  let component: ComputedsignalsComponent;
  let fixture: ComponentFixture<ComputedsignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedsignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedsignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
