import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonapicallComponent } from './jsonapicall.component';

describe('JsonapicallComponent', () => {
  let component: JsonapicallComponent;
  let fixture: ComponentFixture<JsonapicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonapicallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonapicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
