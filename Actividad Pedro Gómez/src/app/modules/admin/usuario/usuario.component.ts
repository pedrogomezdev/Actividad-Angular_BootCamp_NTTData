import { Component } from '@angular/core';
import { UsuarioData } from './usuarioData';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [UsuariosService]
})
export class UsuarioComponent {

  // Creamos un objeto de UsuarioData.
  nuevoUsuario: UsuarioData;

  // Inyectamos el servicio UsuariosService
  constructor(private _usuariosService: UsuariosService) {

    // Dejamos el id como null para que se autogenere en el servidor
    this.nuevoUsuario = new UsuarioData(null, '', '', '', '');
  }

  // Método para enviar los datos del nuevo usuario al servidor
  postUsuario() {
    this._usuariosService.postUser(this.nuevoUsuario).subscribe(data => {
      console.log('Usuario creado con éxito');
      alert("Usuario creado con éxito");
    },
      err => {
        console.error(err);
      }
    );

    // Resetear los valores del nuevo usuario. Como tenemos un bind hecho, se quedará en blanco también
    // en el formulario html.
    this.nuevoUsuario.id = null;
    this.nuevoUsuario.email = "";
    this.nuevoUsuario.nombreApellidos = "";
    this.nuevoUsuario.localidad = "";
    this.nuevoUsuario.provincia = "";
  }
}