import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotapeluqueriaService {
  private x = 'http://localhost:3000/peluqueria';

  constructor(private http: HttpClient) {}

  listpeluquerias(): Observable<any> {
    return this.http.get(this.x + `s`);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }

  public create(peluqueria: any) {
    if (peluqueria.pel_codigo) {
      //Actualiza los datos
      return this.http.put(this.x + `/update`, peluqueria);
    } else {
      // Crea Registro nuevo
      return this.http.post(this.x + `/create`, peluqueria);
    }
  }

  public delete(codigo: String) {
    return this.http.delete(this.x + `/remove/${codigo}`);
  }
  public Filter(texto: String) {
    return this.http.get(`http://localhost:3000/peluqueria-filter?q=${texto}`);
  }
}
