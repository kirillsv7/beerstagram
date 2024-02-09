import { Component, OnInit,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
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
  imports: [CommonModule, FormsModule, IonButtons, IonButton, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, TranslateModule]
})
export class DailySummaryPage  implements OnInit{
  dailyConsumption: Cerveza[] = [];
  totalCalories = 0;
  currentLang = '';
  consumoDiario: ConsumoDiario | null = null;

  constructor(
    private consumoDiarioService: ConsumoDiarioService,
    private i18nService: I18nService,
    private translateService: TranslateService,
    
    
  ) {
    addIcons({
      menuOutline
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
  }
  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.consumoDiarioService.consumoDiario$.subscribe(consumoDiario => {
      this.consumoDiario = consumoDiario;
    });
  }
  
    // Función para el cambio de idioma (Añadido para el cambio de idioma)
    changeLanguage(event: CustomEvent) {
      console.log("event", event.detail.value);
      this.i18nService.changeLanguage(event.detail.value);
    }
    get totalEnergyValue() {
      return this.consumoDiario?.cervezas.reduce((sum, cerveza) => sum + cerveza.beerEnergyValue, 0);
    }
}
