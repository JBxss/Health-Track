import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDataComponent } from './actualizar-data.component';

describe('ActualizarDataComponent', () => {
  let component: ActualizarDataComponent;
  let fixture: ComponentFixture<ActualizarDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
