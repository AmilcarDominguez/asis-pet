import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotagastoService {
  private x = 'http://localhost:3000/gasto';

  constructor(private http: HttpClient) {}

  listGastos(): Observable<any> {
    return this.http.get(this.x + `s`);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }

  public create(gasto: any) {
    if (gasto.gas_codigo) {
      //Actualiza los datos
      return this.http.put(this.x + `/update`, gasto);
    } else {
      // Crea Registro nuevo
      return this.http.post(this.x + `/create`, gasto);
    }
  }

  public delete(codigo: String) {
    return this.http.delete(this.x + `/remove/${codigo}`);
  }
  public Filter(texto: String) {
    return this.http.get(`http://localhost:3000/gasto-filter?q=${texto}`);
  }
}
