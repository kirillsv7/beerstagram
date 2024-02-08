import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ConsumoDiario } from 'src/app/model/consumoDiario';
import { Cerveza } from 'src/app/model/cerveza';

@Injectable({
  providedIn: 'root'
})
export class ConsumoDiarioService {

  constructor(private firestore: Firestore) { }

  // Método para obtener las cervezas consumidas en un día específico
 

  // Método para agregar una cerveza a la lista de cervezas consumidas en un día específico
  async agregarCerveza(fecha: string, cerveza: Cerveza) {
    const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);

    const consumoDiario = await docData(consumoDiarioRef, { idField: 'id' }) as Observable<ConsumoDiario>;
    
    consumoDiario.subscribe((data) => {
      console.log('data:', data);
      const c: ConsumoDiario = data;
      if (c) {
        c.cervezas.push(cerveza);
        setDoc(consumoDiarioRef, c, { merge: true });
      } else {
        const nuevoConsumoDiario: ConsumoDiario = {
          fecha: fecha,
          cervezas: [cerveza]
        };
        setDoc(consumoDiarioRef, nuevoConsumoDiario);
      }
    });


  }
}


