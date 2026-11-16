import { Component, inject, OnInit, signal } from '@angular/core';
import { PersonajeService } from '../../service/personaje-service';
import { Personajes } from '../../models/personajes';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-body-drgon-ball-card',
  styleUrl: './body-drgon-ball-card.css',
  templateUrl: './body-drgon-ball-card.html',
})
export class BodyDrgonBallCard implements OnInit {

  private personajesService = inject(PersonajeService)
  personajes = signal<Personajes[]>([]);
  url = 'http://127.0.0.1:8000/storage/';


  ngOnInit(): void {
    this.cargarLista();

    this.personajesService.personajesCreadoSource$.subscribe(()=>{
      this.cargarLista();
    })
  }
  cargarLista(){

    this.personajesService.listar().subscribe({
      next: (respuesta:any) => this.personajes.set(respuesta),
      error: (err)=> {
        console.log(err)}
    })
  }

}
