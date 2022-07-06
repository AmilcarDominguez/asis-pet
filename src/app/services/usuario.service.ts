import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  token: String = null;
  codigo:String = null;

  private x = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient, public router: Router) {}

  listMascotas(): Observable<any> {
    return this.http.get(this.x + `s`);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }

  public create(usuario: any) {
    if (usuario.usu_codigo) {
      //Actualiza los datos
      return this.http.put(this.x + `/update`, usuario);
    } else {
      // Crea Registro nuevo
      return this.http.post(this.x + `/create`, usuario);
    }
  }

  public delete(codigo: String) {
    return this.http.delete(this.x + `/remove/${codigo}`);
  }
}
