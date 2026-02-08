import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeVillaBelgrano } from './sede-villa-belgrano';

describe('SedeVillaBelgrano', () => {
  let component: SedeVillaBelgrano;
  let fixture: ComponentFixture<SedeVillaBelgrano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedeVillaBelgrano]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedeVillaBelgrano);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
