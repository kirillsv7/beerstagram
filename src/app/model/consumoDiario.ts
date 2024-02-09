
export interface Cerveza {
    nombre: any;
        id: string;
        beerName: string;
        beerVolume: number;
        beerVolumeUnit: string;
        beerEnergyValue: number;
        image?: string;
    }


export interface CervezaConsumoDiario {
    beerName: string;
    beerEnergyValue: number;
}

export interface ConsumoDiario {
    id?: string;
    fecha: string;
    cervezas: CervezaConsumoDiario[];
}
