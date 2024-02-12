import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, IonIcon, IonCardHeader,IonCard,IonCardTitle,IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';

import { CervezaService } from 'src/app/shared/services/cerveza.service';
import { Cerveza } from 'src/app/model/cerveza';
import { ConsumoDiarioService } from 'src/app/shared/services/consumo-diario.service';

@Component({
  selector: 'app-beer-catalog',
  templateUrl: './beer-catalog.page.html',
  styleUrls: ['./beer-catalog.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonIcon, CommonModule, FormsModule, IonButtons, IonButton, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, TranslateModule,IonCard,IonCardTitle,IonCardContent] 
})
export class BeerCatalogPage implements OnInit {
  currentLang = '';

  constructor(
    private router: Router,
    private cervezaService: CervezaService,
    private navCtrl: NavController,
    private consumoDiarioService:ConsumoDiarioService,
    private i18nService: I18nService,
    private translateService: TranslateService
    ) { 
      addIcons({
        menuOutline
      });
  }
  cerveza: Cerveza[] = [];
  cervezaSelected: Cerveza={} as Cerveza;

  ngOnInit() {
    this.currentLang = this.i18nService.getCurrentLanguage();
    console.log('this.currentLang', this.currentLang);
  }

  ionViewWillEnter():any {
    console.log('ionViewWillEnter');
    this.cervezaService.getCerveza().subscribe((cerveza:Cerveza[])=>{
      console.log('cerveza:', cerveza);
      this.cerveza = cerveza;
    }
    );
  }
ionViewDidLoad(): any {
  console.log('ionViewDidLoad');
}

ionViewDidEnter(): any {
  console.log('ionViewDidEnter');
}

ionViewWillLeave(): any {
  console.log('ionViewWillLeave');
}

ionViewDidLeave(): any {
  console.log('ionViewDidLeave');
}

ionViewWillUnload(): any {
  console.log('ionViewWillUnload');
}


  
  logCerveza(cerveza: Cerveza) {
    console.log(cerveza);
  }
  
  addCerveza() {
    this.router.navigate(['/add-beer']);
  }

  updateCerveza(cerveza: Cerveza) {
    this.router.navigate([`/add-beer/${cerveza.id}`]);
  }
  setResumen(cerveza: Cerveza){
    const consumoDiario={
      fecha: new Date().toISOString().split('T')[0],
      cervezas:[cerveza]
    }
    this.consumoDiarioService.agregarCerveza(consumoDiario.fecha, cerveza);
    
  }

  eliminarCerveza(cerveza: Cerveza) {
    this.cervezaService.deleteCerveza(cerveza).then(() => {
      console.log('Cerveza eliminada con éxito');
    }).catch((error) => {
      console.error('Error eliminando cerveza: ', error);
    });
  }
  
  navegarAPagina() {
    this.navCtrl.navigateForward('/add-beer');
  }
  
  /*  addToDailyConsumption(beer: Cerveza) {
    this.cervezaService.addBeerToDailyConsumption(beer);
  } */

  // Función para el cambio de idioma
  changeLanguage(event: CustomEvent) {
    console.log("event", event.detail.value);
    this.i18nService.changeLanguage(event.detail.value);
  }
}
