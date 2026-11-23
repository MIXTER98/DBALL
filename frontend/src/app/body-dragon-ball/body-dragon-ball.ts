import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { BodyDrgonBallCard } from './body-drgon-ball-card/body-drgon-ball-card';
import { PersonajeService } from '../service/personaje-service';
import { FormsModule } from '@angular/forms';
import { Personajes } from '../models/personajes';
import { CommonModule } from '@angular/common';
import { Observable, single } from 'rxjs';


@Component({
  imports: [BodyDrgonBallCard, FormsModule, CommonModule],
  standalone: true,
  selector: 'app-body-dragon-ball',
  templateUrl: './body-dragon-ball.html',
})
export class BodyDragonBall implements OnInit {

  private personajeService = inject(PersonajeService);

  personajes = signal<Personajes[]>([])
  errorBusqueda = signal<string | null>(null); 
  id?: number = 0
  nombre: string = ""
  raza: string = ""
  poder: number = 0
  transformacion: string = ""
  imgsrc: string = ""
  imgUrl?: string = "";

  buscar: string = "";

  personajeSeleccionado?: Personajes;
  personajeEliminar?: Personajes;

  ngOnInit(): void {
    this.cargarLista();

    this.personajeService.personajesCreadoSource$.subscribe(() => {
      this.cargarLista();
    })
  }

  cargarLista() {
    return this.personajeService.listar().subscribe({
      next: (resp: any) => this.personajes.set(resp),
      error: (err) => {console.error(err)
        alert('Paso algo cargar los datos')
      }
    })
  }

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


  busqueda(buscar: string) {
    if (!buscar.trim()) {
      console.log('Busqueda vacia')
      this.cargarLista()
      this.errorBusqueda.set("")
      return;
    }
    return this.personajeService.obtener(buscar).subscribe({
      next: (respuesta) => {
        this.personajes.set([respuesta]);
        this.errorBusqueda.set("")
      },
      error: (err) => {
        console.error(err);
        this.errorBusqueda.set(`Personaje no agregado a la baraja`);
      }
    });
  }

  @ViewChild('modalActualizar')
  modalActualizar!: ElementRef<HTMLDialogElement>;

  seleccionarPersonaje(personaje: Personajes) {
    this.personajeSeleccionado = personaje;
    this.nombre = personaje.nombre;
    this.raza = personaje.raza;
    this.transformacion = personaje.transformacion;
    this.poder = personaje.poder;
    this.imgsrc = personaje.imgsrc;
    this.abriModalActualizar();
  }

  abriModalActualizar() {
    if(!this.modalActualizar.nativeElement.open){
      this.modalActualizar.nativeElement.showModal();
    }}
  cerrarModalActualizar(){
    console.log('abierto')
    this.nombre = ""
    this.raza = ""
    this.transformacion = ""
    this.poder = 0,
    this.imgsrc = ""
    this.modalActualizar.nativeElement.close()
  }

  ActualizarPersonaje() {
    if (!this.personajeSeleccionado) {
      return;
    }

    const personajeActualizado: Personajes = {
      nombre: this.nombre,
      raza: this.raza,
      transformacion: this.transformacion,
      poder: this.poder,
      imgsrc: this.imgsrc
    }

    this.personajeService.editar(this.nombre!, personajeActualizado).subscribe({
      next: () => {
        this.nombre = "",
        this.raza = "",
        this.transformacion = "",
        this.poder = 0,
        this.imgsrc = "",
        this.modalActualizar.nativeElement.close(),
        this.cargarLista();
      }
    })
  }

  eliminarPersonaje(personaje: Personajes){
    this.personajeEliminar = personaje
    if(this.personajeEliminar){
      this.elimina()
    }
  }
  elimina(){
    const nombreEliminar = this.personajeEliminar?.nombre

    if(!nombreEliminar){
      return;
    }
    mensaje:<string[]>[]
    this.personajeService.eliminar(nombreEliminar).subscribe({
      next: (resp:any)=>{
        alert(resp.mensaje)
        this.cargarLista();
      }
    })
  }
}
