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

  constructor(private http: HttpClient, private storage : Storage, public router: Router) {}

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

  public login(usu_correo:String, usu_contra:String){
    const data = {usu_correo, usu_contra};
  
    return new Promise(resolve=>{
  
      this.http.post(this.x+`/login`,data).subscribe(resp=>{
        console.log(resp);

       if(resp['success']){
         this.guardarToken(resp['token']);
         this.guardarId(resp['codigo']);
         resolve(true);
       }else{
         this.token=null;
         this.codigo=null;
         this.storage.clear();
         resolve(false);
       }
    
      });
    });

  }
  
  async guardarToken(usu_token:String){
    this.storage.create();
  this.token = usu_token;
  await this.storage.set('token',usu_token);
  }
  
  async guardarId(usu_codigo:String){
    this.storage.create();
  this.codigo = usu_codigo;
  await this.storage.set('codigo',usu_codigo);
  }

  logout(){
    this.storage.create();
    this.token = null;
    this.storage.clear();
    this.router.navigate(['/login']);
    
  }
}
