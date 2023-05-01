export class UsuarioData {
    id: string;
    email: string;
    nombreApellidos: string;
    localidad: string;
    provincia: string;

    constructor(id: string, email: string, nombreApellidos: string, localidad: string, provincia: string) {
        this.id = id;
        this.email = email;
        this.nombreApellidos = nombreApellidos;
        this.localidad = localidad;
        this.provincia = provincia;
    }
}