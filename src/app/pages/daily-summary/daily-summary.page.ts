import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {
  IonButton,
  IonButtons,
  IonMenu,
  IonContent,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonTitle,
  IonItem,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption, IonList, IonCard, NavController, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { Cerveza } from 'src/app/model/cerveza';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';
import { ConsumoDiarioService } from 'src/app/shared/services/consumo-diario.service';
import { ConsumoDiario } from 'src/app/model/consumoDiario';
@Component({
  selector: 'app-daily-summary',
  templateUrl: './daily-summary.page.html',
  styleUrls: ['./daily-summary.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonList, 
    CommonModule,
    FormsModule,
    IonButtons,
    IonButton,
    IonMenu,
    IonContent,
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
    IonSelect,
    IonSelectOption,
    TranslateModule,
  ],
})
export class DailySummaryPage implements OnInit {
  consumos!: ConsumoDiario[];

  dailyConsumption: Cerveza[] = [];
  totalCalories = 0;
  currentLang = '';
  consumoDiario: ConsumoDiario | null = null;

  constructor(
    private consumoDiarioService: ConsumoDiarioService,
    private i18nService: I18nService,
    private navCtrl: NavController,
    private translateService: TranslateService,
    private consumoService: ConsumoDiarioService
  ) {
    addIcons({
      menuOutline,
    });
  }

  ngOnInit() {
    this.currentLang = this.i18nService.getCurrentLanguage();
    console.log('this.currentLang', this.currentLang);
    
    this.consumoDiarioService.consumoDiario$.subscribe(consumoDiario => {
      console.log('Consumo Diario:', consumoDiario);
      // Actualiza la vista con los nuevos datos
      this.consumoDiario = consumoDiario;
    });
    
    // Obtener datos iniciales
    this.consumoService.getConsumoDiario().subscribe((consumos) => {
      this.consumos = consumos;
      
      // Escuchar cambios en tiempo real
      /*this.consumoService.consumoDiario$.subscribe((consumo) => {
        // actualizar arreglo de consumos
        if (consumo) {
          this.consumos.push(consumo);
        }
      });*/

      this.consumoDiarioService.getConsumoDiarioRes();
    });
  }

  ionViewWillEnter() {}

  navegarAPagina() {
    this.navCtrl.navigateForward('/beer-catalog');
  }

  // Función para el cambio de idioma (Añadido para el cambio de idioma)
  changeLanguage(event: CustomEvent) {
    console.log('event', event.detail.value);
    this.i18nService.changeLanguage(event.detail.value);
  }
  get totalEnergyValue() {
    return this.consumoDiario?.cervezas?.reduce(
      (sum, cerveza) => sum + (cerveza.beerEnergyValue || 0),
      0
    );
  }
}
