import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsuarioData } from "../usuario/usuarioData";

@Injectable()
export class UsuariosService {
    // Guardamos la url en una variable para que, en caso de que cambiara el puerto o la ip no tengamos que cambiarlo
    // en todos los métodos.
    url: string = "http://212.227.50.239:8080/api/";

    constructor(private _http: HttpClient) { }

    // Método para enviar un objeto UsuarioData al backend para crear un nuevo usuario
    postUser(user: UsuarioData) {
        return this._http.post((this.url + "usuario"), user);
    }

    // Método para obtener todos los usuarios del backend
    findUsers() {
        return this._http.get<any>(this.url + "usuario");
    }

    // Método para buscar usuarios por nombre
    findUsersByName(name: string) {
        return this._http.get<any>(this.url + "usuario?nombreApellidos=" + name);
    }

    // Método para buscar usuarios por provincia
    findUsuarioByProvince(province: string) {
        return this._http.get<any>(this.url + "usuario?provincia=" + province);
    }

    // Método para buscar usuarios por localidad
    findUsersByLocation(location: string) {
        return this._http.get<any>(this.url + "usuario?localidad=" + location);
    }

    // Método para buscar usuarios por email
    findUsersByEmail(email: string) {
        return this._http.get<any>(this.url + "usuario?localidad=" + email);
    }

    // Método para eliminar un usuario del backend
    deleteUser(id: string) {
        const url = this.url + "usuario/" + id;
        return this._http.delete(url);
    }

    // Método para actualizar un usuario del backend
    updateUser(user: UsuarioData) {
        const url = this.url + "usuario/" + user.id;
        return this._http.put(url, user);
    }



}