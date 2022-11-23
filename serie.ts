export class Serie {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number; 
    descripcion: string;
    link: string;
    portada: string;
    

    constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, link: string, portada: string ) {
        this.nombre = nombre;
        this.id = id;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion
        this.link = link
        this.portada = portada
    }
}