import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotavacunaService {
  private x = 'http://localhost:3000/vacuna';

  constructor(private http: HttpClient) {}

  listvacunas(): Observable<any> {
    return this.http.get(this.x + `s`);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }

  public create(vacuna: any) {
    if (vacuna.vac_codigo) {
      //Actualiza los datos
      return this.http.put(this.x + `/update`, vacuna);
    } else {
      // Crea Registro nuevo
      return this.http.post(this.x + `/create`, vacuna);
    }
  }

  public delete(codigo: String) {
    return this.http.delete(this.x + `/remove/${codigo}`);
  }
  public Filter(texto,texto2: String) {
    return this.http.get(`http://localhost:3000/vacuna-filter?q=${texto}&i=${texto2}`);
  }
}
