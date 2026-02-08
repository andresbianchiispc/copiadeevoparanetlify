import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeVillaAllende } from './sede-villa-allende';

describe('SedeVillaAllende', () => {
  let component: SedeVillaAllende;
  let fixture: ComponentFixture<SedeVillaAllende>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedeVillaAllende]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedeVillaAllende);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
