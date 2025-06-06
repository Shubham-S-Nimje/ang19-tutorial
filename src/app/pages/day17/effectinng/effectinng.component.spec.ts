import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectinngComponent } from './effectinng.component';

describe('EffectinngComponent', () => {
  let component: EffectinngComponent;
  let fixture: ComponentFixture<EffectinngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectinngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectinngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
