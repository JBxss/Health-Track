import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarContrasenaComponent } from './actualizar-contrasena.component';

describe('ActualizarContrasenaComponent', () => {
  let component: ActualizarContrasenaComponent;
  let fixture: ComponentFixture<ActualizarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
