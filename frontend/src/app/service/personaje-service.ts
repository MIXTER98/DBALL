import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

    private http = inject(HttpClient);
    private apiUrl = 'http://127.0.0.1:8000/api/personaje'


    listar(){
        return this.http.get(this.apiUrl);
    }

    obtener(){

    }

    crear(){

    }
    editar(){

    }

    eliminar(){

    }

}
