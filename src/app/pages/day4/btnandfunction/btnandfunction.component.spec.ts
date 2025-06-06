import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnandfunctionComponent } from './btnandfunction.component';

describe('BtnandfunctionComponent', () => {
  let component: BtnandfunctionComponent;
  let fixture: ComponentFixture<BtnandfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnandfunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnandfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
