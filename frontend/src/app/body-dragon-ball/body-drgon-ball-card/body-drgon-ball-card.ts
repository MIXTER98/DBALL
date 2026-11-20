import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personajes } from '../../models/personajes';
import { CommonModule } from '@angular/common';
import { PowerLevelCard } from './power-level-card/power-level-card';

@Component({
  imports: [CommonModule, PowerLevelCard],
  standalone: true,
  selector: 'app-body-drgon-ball-card',
  styleUrl: './body-drgon-ball-card.css',
  templateUrl: './body-drgon-ball-card.html',
})
export class BodyDrgonBallCard {

  url ='http://127.0.0.1:8000/storage/';

  @Input()
  personajes: Personajes[] = [];
  
  @Output()
  editarPersonje = new EventEmitter<Personajes>();

  @Output()
  eliminarPersonaje = new EventEmitter<Personajes>()
  
  editar(personajes: Personajes){
    this.editarPersonje.emit(personajes);
  }

  eliminar(personajes: Personajes){
    this.eliminarPersonaje.emit(personajes);
  }
}
