import { Component, inject } from '@angular/core';
import { BodyDrgonBallCard } from './body-drgon-ball-card/body-drgon-ball-card';
import { PersonajeService } from '../service/personaje-service';
import { FormsModule } from '@angular/forms';
import { Personajes } from '../models/personajes';
import { CommonModule } from '@angular/common';


@Component({
  imports: [BodyDrgonBallCard, FormsModule, CommonModule],
  standalone: true,
  selector: 'app-body-dragon-ball',
  styleUrl: './body-dragon-ball.css',
  templateUrl: './body-dragon-ball.html',
})
export class BodyDragonBall {
  private personajeService = inject(PersonajeService);

  id?: number = 0
  nombre: string = ""
  raza: string = ""
  poder: number = 0
  transformacion: string = ""
  imgsrc: string = ""
  imgUrl?: string = "";

  buscar: string = "";

  agregarPersonaje() {
    const nuevoPersonaje: Personajes = {
      nombre: this.nombre,
      raza: this.raza,
      poder: Number(this.poder),
      transformacion: this.transformacion,
      imgsrc: this.imgsrc,
      imgUrl: this.imgsrc
    };

    this.personajeService.crear(nuevoPersonaje).subscribe({
      next: (resp) => {
        console.log("Personaje creado.", resp)
        this.nombre = "";
        this.raza = "";
        this.poder = 0;
        this.transformacion = "";
        this.imgsrc = "";

        const modal = document.getElementById('modal') as HTMLDialogElement;
        if (modal) modal.close();
      },
      error: (err) => {
        console.error('Error aal guardar el personje: ', err);
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.imgsrc = 'personajes/normal/' + file.name;
      console.log(typeof this.imgsrc)
    } else {
      console.log('Ruta vacía')
    }
  }


  busqueda() {

  }
}
