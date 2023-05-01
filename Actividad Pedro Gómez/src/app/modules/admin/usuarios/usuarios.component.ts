import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { UsuarioData } from '../usuario/usuarioData';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuariosService]
})
export class UsuariosComponent {

  // Declaración de variables
  usuarios: Array<object>; // Lista de usuarios obtenidos del servicio.
  usuarioSeleccionado: UsuarioData; // Usuario seleccionado para editar.
  editando: boolean = false; // Bandera que indica si se está editando un usuario.
  busqueda: string; // Texto ingresado para buscar usuarios.
  campoBusqueda: string; // Criterio de búsqueda seleccionado por el usuario.
  resultadosEncontrados: boolean = true; // Bandera que indica si se encontraron resultados de búsqueda o no.

  usuarioAntesDeEditar: UsuarioData;

  // Constructor, inicializa las variables
  constructor(private _usuariosService: UsuariosService) {
    this.busqueda = '';
    this.campoBusqueda = '';
    this.usuarios = new Array<object>;
  }

  // Función que se ejecuta al inicializar el componente.
  ngOnInit(): void {
    this._usuariosService.findUsers().subscribe(data => {

      // Si no tiene el nombre relleno lo quita.
      this.usuarios = data.filter(i => i['nombreApellidos'] !== "");
    })
  }

  // Función para eliminar un usuario por id.
  deleteUsuario(id: string) {
    this._usuariosService.deleteUser(id).subscribe(data => {
      location.reload();
    }, err => {
      console.error(err);
    })
  }

  // Función para seleccionar un usuario para editar.
  updateUsuario(usuario: UsuarioData) {
    // Creamos un nuevo usuario con los datos iniciales, ya que si lo igualamos al usuario actual, se editarían los cambios en tiempo real por el binding.
    this.usuarioSeleccionado = new UsuarioData(usuario.id, usuario.email, usuario.nombreApellidos, usuario.localidad, usuario.provincia);
  }

  // Función para confirmar los cambios realizados en un usuario
  confirmarCambios() {
    this._usuariosService.updateUser(this.usuarioSeleccionado).subscribe(data => {
      // Recargar la página después de actualizar el usuario
      location.reload();
    }, err => {
      console.error(err);
    });
  }

  // Función para buscar usuarios por nombre
  buscarPorNombre(nombre: string) {
    this._usuariosService.findUsersByName(nombre).subscribe(data => {
      this.usuarios = data.filter(i => i['nombreApellidos'] != "");
    });
  }

  // Función para buscar usuarios por provincia
  buscarPorProvincia(provincia: string) {
    this._usuariosService.findUsuarioByProvince(provincia).subscribe(data => {
      this.usuarios = data.filter(i => i['nombreApellidos'] != "");
    });
  }

  // Función para buscar usuarios por localidad
  buscarPorLocalidad(localidad: string) {
    this._usuariosService.findUsersByLocation(localidad).subscribe(data => {
      this.usuarios = data.filter(i => i['nombreApellidos'] != "");
    });
  }

  // Función para cargar todos los usuarios
  cargarUsuarios() {
    this._usuariosService.findUsers().subscribe(data => {
      // Filtra los usuarios que no tengan el nombre relleno
      this.usuarios = data.filter(i => i['nombreApellidos'] != '');
    });
  }

  // Función para buscar usuarios según el criterio seleccionado por el usuario
  buscar() {

    if (this.busqueda.trim() === '') {
      // Si el campo de búsqueda está vacío, recarga todos los usuarios
      this.cargarUsuarios();
    } else {
      // Realiza la búsqueda de acuerdo al criterio seleccionado por el usuario
      switch (this.campoBusqueda) {
        case 'nombreApellidos':

          this._usuariosService.findUsersByName(this.busqueda).subscribe(data => {

            // Le añado "?" ya que si no, me da error en el navegador.

            this.usuarios = data.filter(u => u?.nombreApellidos?.toLowerCase()?.includes(this.busqueda?.toLowerCase()));

          });
          break;
        case 'localidad':
          this._usuariosService.findUsersByLocation(this.busqueda).subscribe(data => {
            this.usuarios = data.filter(u => u.localidad.toLowerCase()?.includes(this.busqueda.toLowerCase()));
          });
          break;
        case 'email':
          this._usuariosService.findUsersByEmail(this.busqueda).subscribe(data => {
            this.usuarios = data.filter(u => u.email.toLowerCase()?.includes(this.busqueda.toLowerCase()));
          });
          break;
        case 'provincia':
          this._usuariosService.findUsuarioByProvince(this.busqueda).subscribe(data => {
            this.usuarios = data.filter(u => u.provincia.toLowerCase()?.includes(this.busqueda.toLowerCase()));
          });
          break;
      }
    }

    // Si el tamaño de la lista de usuarios es 0, cambia a false la variable resultadosEncontrados, y si es mayor (tiene registros) la cambia a true.
    if (this.usuarios.length === 0) {
      this.resultadosEncontrados = false;
    } else {
      this.resultadosEncontrados = true;
    }
  }

}
