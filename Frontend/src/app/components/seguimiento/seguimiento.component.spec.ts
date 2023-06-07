import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoComponent } from './seguimiento.component';

describe('SeguimientoComponent', () => {
  let component: SeguimientoComponent;
  let fixture: ComponentFixture<SeguimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientoComponent]
    });
    fixture = TestBed.createComponent(SeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
