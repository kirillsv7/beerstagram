import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConsumoDiario } from 'src/app/model/consumoDiario';
import { Cerveza } from 'src/app/model/cerveza';

@Injectable({
  providedIn: 'root'
})
export class ConsumoDiarioService {
  obtenerConsumoDiario(fechaActual: string) {
    throw new Error('Method not implemented.');
  }
  //para manejar los datos de consumo diario
    private consumoDiarioSource = new BehaviorSubject<ConsumoDiario | null>(null);
    consumoDiario$ = this.consumoDiarioSource.asObservable();

  constructor(private firestore: Firestore) { }

  // Método para obtener las cervezas consumidas en un día específico
 

  // Método para agregar una cerveza a la lista de cervezas consumidas en un día específico
  /* async agregarCerveza(fecha: string, cerveza: Cerveza) {
    const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);

    const consumoDiario = await docData(consumoDiarioRef, { idField: 'id' }) as Observable<ConsumoDiario>;
     */
    /* consumoDiario.subscribe((data) => {
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
    }); */
    

/* async agregarCerveza(fecha: string, cerveza: Cerveza) {
  console.log('agregarCerveza ha sido llamado');

  const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);
  console.log('consumoDiarioRef:', consumoDiarioRef);

  try {
    const docSnapshot = await getDoc(consumoDiarioRef);
    const consumoDiario = docSnapshot.data() as ConsumoDiario;

    console.log('Consumo Diario:', consumoDiario);

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
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
} */

// funsiòn para obtener el consumo diario
/* async agregarCerveza(fecha: string, cerveza: Cerveza) {
  console.log('agregarCerveza ha sido llamado');
  const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);
  const docSnapshot = await getDoc(consumoDiarioRef);
  let consumoDiario = docSnapshot.data() as ConsumoDiario;
  console.log('Consumo Diario:', consumoDiario);
  this.consumoDiarioSource.next(consumoDiario);
  if (consumoDiario) {
    consumoDiario.cervezas.push(cerveza);
  } else {
    consumoDiario = {
      fecha: fecha,
      cervezas: [cerveza]
    };
  }

  await setDoc(consumoDiarioRef, consumoDiario, { merge: true });
  this.consumoDiarioSource.next(consumoDiario);
} */
async agregarCerveza(fecha: string, cerveza: Cerveza) {
  const consumoDiarioRef = doc(this.firestore, `consumoDiario/${fecha}`);
  const docSnapshot = await getDoc(consumoDiarioRef);
  let consumoDiario = docSnapshot.data() as ConsumoDiario;

  const cervezaResumida = {
    beerName: cerveza.beerName,
    beerEnergyValue: cerveza.beerEnergyValue
  };

  if (consumoDiario) {
    consumoDiario.cervezas.push(cervezaResumida);
  } else {
    consumoDiario = {
      fecha: fecha,
      cervezas: [cervezaResumida]
    };
  }

  await setDoc(consumoDiarioRef, consumoDiario, { merge: true });
  this.consumoDiarioSource.next(consumoDiario);
}

}




  




