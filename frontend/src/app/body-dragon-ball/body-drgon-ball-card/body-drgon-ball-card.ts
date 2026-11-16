import { Component, inject, OnInit } from '@angular/core';
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
  personajes: Personajes[] = [];
  url = 'http://127.0.0.1:8000/storage/';


  constructor(){
    console.log('CONS')
  }
  ngOnInit(): void {
    console.log('ONIN')
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.personajesService.listar().subscribe({
      next: (respuesta: any) => {
        console.log(respuesta);
        this.personajes = respuesta;
        console.log("Personajes: ", this.personajes);
        console.log('Length:', this.personajes.length);
      },
      error: (err) => { console.error(err) }
    })
  }

}
