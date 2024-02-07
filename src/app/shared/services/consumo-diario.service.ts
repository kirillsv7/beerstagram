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
  getConsumoDiario(fecha: string): Observable<ConsumoDiario> {
    const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);
    return docData(consumoDiarioRef, { idField: 'id' }) as Observable<ConsumoDiario>;
  }

  // Método para agregar una cerveza a la lista de cervezas consumidas en un día específico
  async agregarCerveza(fecha: string, cerveza: Cerveza) {
    const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);
    const consumoDiario = await this.getConsumoDiario(fecha).toPromise();
    if (consumoDiario) {
      consumoDiario.cervezas.push(cerveza);
      await setDoc(consumoDiarioRef, consumoDiario, { merge: true });
    } else {
      const nuevoConsumoDiario: ConsumoDiario = {
        fecha: fecha,
        cervezas: [cerveza]
      };
      await setDoc(consumoDiarioRef, nuevoConsumoDiario);
    }
  }
}


