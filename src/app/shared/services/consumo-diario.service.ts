import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConsumoDiario } from 'src/app/model/consumoDiario';
import { Cerveza } from 'src/app/model/cerveza';

@Injectable({
  providedIn: 'root',
})
export class ConsumoDiarioService {
  eliminarConsumoDiario(id: string | undefined) {
    throw new Error('Method not implemented.');
  }
 
  //para manejar los datos de consumo diario
  private consumoDiarioSource = new BehaviorSubject<ConsumoDiario | null>(null);
  consumoDiario$ = this.consumoDiarioSource.asObservable();

  constructor(private firestore: Firestore) {}

  // Método para obtener las cervezas consumidas en un día específico
  async agregarCerveza(fecha: string, cerveza: Cerveza) {
    const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);
    const docSnapshot = await getDoc(consumoDiarioRef);
    let consumoDiario = docSnapshot.data() as ConsumoDiario;

    const cervezaResumida = {
      beerName: cerveza.beerName,
      beerEnergyValue: cerveza.beerEnergyValue,
    };

    if (consumoDiario) {
      consumoDiario.cervezas.push(cervezaResumida);
    } else {
      consumoDiario = {
        fecha: fecha,
        cervezas: [cervezaResumida],
      };
    }

    await setDoc(consumoDiarioRef, consumoDiario, { merge: true });
    this.consumoDiarioSource.next(consumoDiario);
  }
   getConsumoDiario(): Observable<ConsumoDiario[]> {
    const cervezaRef = collection(this.firestore, 'consumoDiario');
    return collectionData(cervezaRef, { idField: 'id' }) as Observable<
      ConsumoDiario[]
    >;
  } 
  async deleteConsumoDiario(consumoDiario: ConsumoDiario) {
    const consumoDiarioDocRef = doc(
      this.firestore,
      `consumoDiario/${consumoDiario.id}`
    );
    await deleteDoc(consumoDiarioDocRef);
  }
  obtenerConsumoDiario(fechaActual: string): Observable<ConsumoDiario[]> {
    const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fechaActual}`);
    return docData(consumoDiarioRef) as Observable<ConsumoDiario[]>;
  }
}
