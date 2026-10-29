import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirFicheroComponents } from './subir-fichero-components';
import { ServiceFicheros } from '../../services/service.ficheros';

describe('SubirFicheroComponents', () => {
  let component: SubirFicheroComponents;
  let fixture: ComponentFixture<SubirFicheroComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubirFicheroComponents],
      providers: [ServiceFicheros],
    }).compileComponents();

    fixture = TestBed.createComponent(SubirFicheroComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
