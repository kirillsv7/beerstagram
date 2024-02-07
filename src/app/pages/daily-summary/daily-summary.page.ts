import { Component, OnInit,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Cerveza } from 'src/app/model/cerveza';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';

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

  constructor(
    private i18nService: I18nService,
    private translateService: TranslateService
   /*  private cervezaService: CervezaService, */
  ) {
    addIcons({
      menuOutline
    });
  }

  ngOnInit() {
    this.currentLang = this.i18nService.getCurrentLanguage();
    console.log('this.currentLang', this.currentLang);
    //manejo nuevo de agregar cerveza
   /*  this.dailyConsumption = this.cervezaService.getDailyConsumption();
    this.totalCalories = this.dailyConsumption.reduce((sum, beer) => sum + beer.calorias, 0); */
  }
  
    // Función para el cambio de idioma (Añadido para el cambio de idioma)
    changeLanguage(event: CustomEvent) {
      console.log("event", event.detail.value);
      this.i18nService.changeLanguage(event.detail.value);
    }

}
