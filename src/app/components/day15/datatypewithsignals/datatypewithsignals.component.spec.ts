import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypewithsignalsComponent } from './datatypewithsignals.component';

describe('DatatypewithsignalsComponent', () => {
  let component: DatatypewithsignalsComponent;
  let fixture: ComponentFixture<DatatypewithsignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatypewithsignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatypewithsignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
