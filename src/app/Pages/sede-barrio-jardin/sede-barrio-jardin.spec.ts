import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeBarrioJardin } from './sede-barrio-jardin';

describe('SedeBarrioJardin', () => {
  let component: SedeBarrioJardin;
  let fixture: ComponentFixture<SedeBarrioJardin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedeBarrioJardin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedeBarrioJardin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
