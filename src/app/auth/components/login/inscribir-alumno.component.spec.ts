import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirAlumnoComponent } from './inscribir-alumno.component';

describe('InscribirAlumnoComponent', () => {
  let component: InscribirAlumnoComponent;
  let fixture: ComponentFixture<InscribirAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscribirAlumnoComponent]
    });
    fixture = TestBed.createComponent(InscribirAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
