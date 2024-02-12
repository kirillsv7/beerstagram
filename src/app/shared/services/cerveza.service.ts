import { Injectable } from '@angular/core';
import { 
  Firestore,
  addDoc, 
  collection, 
  collectionData, 
  deleteDoc, 
  doc, 
  docData,
  updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cerveza} from 'src/app/model/cerveza';


@Injectable({
  providedIn: 'root'
})
export class CervezaService {

  constructor(
    private firestore: Firestore,
   /*  private dailyConsumption: Cerveza[] = []; */
   /*  private auth:Auth */) { }

  getCerveza(): Observable<Cerveza[]> {
    const cervezaRef = collection(this.firestore, 'cerveza');
    return collectionData(cervezaRef, { idField: 'id' }) as Observable<Cerveza[]>;
  }

  getCervezaById(id: string): Observable<Cerveza> {
    const cervezaDocRef = doc(this.firestore, `cerveza/${id}`);
    return docData(cervezaDocRef, { idField: 'id' }) as Observable<Cerveza>;
  }


  addCerveza(cerveza: Cerveza) {
    const cervezaRef = collection(this.firestore, 'cerveza');
    return addDoc(cervezaRef, cerveza);
  }

  deleteCerveza(cerveza: Cerveza) {
    const cervezaDocRef = doc(this.firestore, `cerveza/${cerveza.id}`);
    return deleteDoc(cervezaDocRef);
  }

  updateCerveza(cerveza: Cerveza) {
    const cervezaDocRef = doc(this.firestore, `cerveza/${cerveza.id}`);
    return updateDoc(cervezaDocRef, {
      id: cerveza.id,
      beerName: cerveza.beerName,
      beerVolume: cerveza.beerVolume,
      beerVolumeUnit: cerveza.beerVolumeUnit,
      beerEnergyValue: cerveza.beerEnergyValue,
      image: cerveza.image
    });
  }

}

/* addBeerToDailyConsumption(beer: Cerveza) {
  this.dailyConsumption.push(beer);
}

getDailyConsumption() {
  return this.dailyConsumption;
} */
