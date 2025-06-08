import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusecomponentComponent } from './reusecomponent.component';

describe('ReusecomponentComponent', () => {
  let component: ReusecomponentComponent;
  let fixture: ComponentFixture<ReusecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
