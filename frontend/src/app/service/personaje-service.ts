import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Personajes } from '../models/personajes';
import { Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

    private personajesCreadoSource = new Subject<void>();
    personajesCreadoSource$=this.personajesCreadoSource.asObservable();
    private http = inject(HttpClient);
    private apiUrl = 'http://127.0.0.1:8000/api/personaje'
    private apiCreate = 'http://127.0.0.1:8000/api/personaje'

    listar(){
        return this.http.get(this.apiUrl);
    }

    obtener(nombre: string){
        return this.http.get<Personajes>(this.apiUrl+`/${nombre}`)
    }

    crear(personaje: Personajes){
        return this.http.post<Personajes>(this.apiCreate, personaje).pipe(
            tap(() =>{
                this.personajesCreadoSource.next();
            })
        );
    }
    editar(nombre:string, personaje:Personajes){
        return this.http.put<Personajes>(this.apiCreate+`/${nombre}`, personaje)

    }

    eliminar(nombre:string){
        return this.http.delete(this.apiUrl+`/${nombre}`)

    }

}
