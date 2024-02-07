import { Cerveza } from './cerveza'; // Import the 'Cerveza' interface from the appropriate file

export interface ConsumoDiario {
    id?: string;
    fecha: string;
    cervezas: Cerveza[];
}
  