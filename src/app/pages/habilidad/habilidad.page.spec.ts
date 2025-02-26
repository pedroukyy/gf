import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadPage } from './habilidad.page';

describe('HabilidadPage', () => {
  let component: HabilidadPage;
  let fixture: ComponentFixture<HabilidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
