import { Component } from '@angular/core';
import { UsuarioData } from '../usuario/usuarioData';
import { Posicion } from './posicion';
import { Viaje } from './viaje';
import { ViajeService } from './viaje.service';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
  providers: [ViajeService, UsuariosService]
})
export class ViajesComponent {

  viajes: Array<Object>;
  mostrarFormCrearViaje: boolean = false;
  tituloViaje: string;
  descripcion: string;
  organizadores: Array<object>;
  nuevoViaje: Viaje;

  constructor(private _viajeService: ViajeService, private _usuariosService: UsuariosService) {
    this.viajes = new Array<Object>;
    this.nuevoViaje = new Viaje(null, null, '', '', '', null, null, null);
    this.organizadores = new Array<object>;
    
  }

  ngOnInit(): void {

    // Localiza los viajes del backend y los filtra para quitar los que no tengan un organizador

    this._viajeService.findViajes().subscribe(data => {

      // Si no tiene el nombre relleno lo quita.
      this.viajes = data.filter(i => i['organizador'] !== null);
      //console.log(data);
    })
  }

  findOrganizadores(){
    this._usuariosService.findUsers().subscribe(data => {
      const usuariosConNombre = data.filter(i => i['nombreApellidos'] !== "");
      this.organizadores = usuariosConNombre.map(u => ({ nombre: u['nombreApellidos'] }));
    })
  }


  postViaje() {

    // Almacenamos los organizadores disponibles en la variable "organizadores"
    this.findOrganizadores();

    /*
    this._viajeService.postUser(this.nuevoViaje).subscribe(data => {
      console.log('Viaje creado con éxito');
      alert("Viaje creado con éxito");
    },
      err => {
        console.error(err);
      }
    );
      */
  }

  // Método para convertir la fecha y hora al formato correcto para ser recibida.
  convertirFecha(date: Date, time: string): string {
    const timeParts = time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);
    const dateTime = new Date(date.getTime());
    dateTime.setUTCHours(hours, minutes, seconds, 0);
    const isoDate = dateTime.toISOString();
    const offset = '+00:00';
    return isoDate.substring(0, isoDate.length - 1) + offset;
  }

  // Crea un objeto Posicion con los datos proporcionados por el usuario
  crearPosicion(lon: number, name: string, lat: number): Posicion{
    return new Posicion(lon,name,lat);
  }

  /*crearViaje(organizador, titulo, descripcion, salida, puntoSalida, puntoLlegada, reservas){
    this.organizador = organizador;
    this.titulo = titulo
  }*/

  mostrarFormCrearViajeFunc() {
    this.mostrarFormCrearViaje = true;
  }

  cancelarFormCrearViajeFunc() {
    
    console.log(this.tituloViaje);
  }


}
