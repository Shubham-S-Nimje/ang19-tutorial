import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfieldvalueComponent } from './inputfieldvalue.component';

describe('InputfieldvalueComponent', () => {
  let component: InputfieldvalueComponent;
  let fixture: ComponentFixture<InputfieldvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputfieldvalueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputfieldvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
