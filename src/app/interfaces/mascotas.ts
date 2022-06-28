import { Time } from "@angular/common";

export interface Mascota {
    mas_codigo: number;
    mas_nombre: string;
    mas_tipo: string;
    mas_sexo: string;
    mas_raza: string;
    mas_fecha_nacimiento: Date;
    mas_notas: string;
}