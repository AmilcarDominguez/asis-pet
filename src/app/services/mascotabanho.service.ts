import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotabanhoService {
  private x = 'http://localhost:3000/banho';

  constructor(private http: HttpClient) {}

  listBanhos(): Observable<any> {
    return this.http.get(this.x + `s`);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }

  public create(banho: any) {
    if (banho.ban_codigo) {
      //Actualiza los datos
      return this.http.put(this.x + `/update`, banho);
    } else {
      // Crea Registro nuevo
      return this.http.post(this.x + `/create`, banho);
    }
  }

  public delete(codigo: String) {
    return this.http.delete(this.x + `/remove/${codigo}`);
  }
  public Filter(texto, texto2: String) {
    return this.http.get(`http://localhost:3000/banho-filter?q=${texto}&i=${texto2}`);
  }
}
