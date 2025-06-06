import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicuserComponent } from './dynamicuser.component';

describe('DynamicuserComponent', () => {
  let component: DynamicuserComponent;
  let fixture: ComponentFixture<DynamicuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
