import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolistappComponent } from './tolistapp.component';

describe('TolistappComponent', () => {
  let component: TolistappComponent;
  let fixture: ComponentFixture<TolistappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TolistappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolistappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
