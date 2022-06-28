import { Mascota } from "src/app/interfaces/mascotas";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
  export class MascotaService {
    api = 'http://localhost:3000/mascota';
    constructor(public http: HttpClient) {}
  
    listarMascota() {
      return this.http.get(this.api + 's');
    }
  
    crearMascota(user: any) {
      return this.http.post(this.api + '/create', user);
    }
  
    buscarMascota(texto: String) {
      return this.http.get(this.api + `s-filter/${texto}`);
    }
  
    obtenerMascota(id: number){
      const path = `${this.api}/find/${id}`;
      return this.http.get(path);
    }
    actualizarMascota(Mascotas_codigo, Mascota: Mascota) {
      return this.http.put(
        'http://localhost:3000/mascota/update/' + Mascotas_codigo,
        Mascota
      );
    }  
    eliminarMascotaService(id: Observable<Mascota[]>) {
      return this.http.delete<Mascota[]>(
        'http://localhost:3000/mascota/remove/' + id
      );
    }
  }