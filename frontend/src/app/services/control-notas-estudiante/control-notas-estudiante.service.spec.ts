import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ControlNotasEstudianteService } from './control-notas-estudiante.service';

fdescribe('ControlNotasEstudianteService', () => {
  let service: ControlNotasEstudianteService;
  let data = {
    id_usuario: 1,
    id_clase: 1
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ControlNotasEstudianteService, HttpClient]
    });
    service = TestBed.inject(ControlNotasEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When Obtencion de Tareas y Examenes Exitosa', () => {
    it('And Obtencion de Tareas', (done) => {
      service.get_tareas(data).subscribe((res) => {
        expect(res).toBeDefined();
        done();
      });
    });

    it('And Obtencion de Examenes', (done) => {
      service.get_examenes(data).subscribe((res) => {
        expect(res).toBeDefined();
        done();
      });
    }); 
  });
});
