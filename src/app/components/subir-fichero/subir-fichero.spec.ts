import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirFichero } from './subir-fichero';

describe('SubirFichero', () => {
  let component: SubirFichero;
  let fixture: ComponentFixture<SubirFichero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubirFichero]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubirFichero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
