import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Viaje } from "./viaje";

@Injectable()
export class ViajeService {
    // Guardamos la url en una variable para que, en caso de que cambiara el puerto o la ip no tengamos que cambiarlo
    // en todos los métodos.
    url: string = "http://212.227.50.239:8080/api/";

    constructor(private _http: HttpClient) { }

    // Método para obtener todos los usuarios del backend
    findViajes() {
        return this._http.get<any>(this.url + "trayecto");
    }

    postUser(viaje: Viaje) {
        return this._http.post((this.url + "trayecto"), viaje);
    }

}