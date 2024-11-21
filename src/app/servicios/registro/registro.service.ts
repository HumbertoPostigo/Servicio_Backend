import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  backend = environment.backend+"/registroform";
  constructor( private http: HttpClient) { }

  //Funcionalidad que se conecta al punto 3 - Obtener Registros de nuestro Backend 
  obtenerRegistros(){
    return this.http.get(`${this.backend}/obtener-registros`)
  }
}


