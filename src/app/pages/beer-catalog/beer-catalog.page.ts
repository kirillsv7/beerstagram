import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

// Nuevas importaciones (Añadidas para el cambio de idioma)
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';

@Component({
  selector: 'app-beer-catalog',
  templateUrl: './beer-catalog.page.html',
  styleUrls: ['./beer-catalog.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButtons, IonButton, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, TranslateModule] // He añadido TranslateModule (Añadido para el cambio de idioma)
})
export class BeerCatalogPage implements OnInit {

  // Inicializamos currentLang (Añadido para el cambio de idioma)
  currentLang = '';

  constructor(
    // Añadido para el cambio de idioma
    private i18nService: I18nService,
    private translateService: TranslateService
    ) { 
      addIcons({
        menuOutline
      });
  }

  ngOnInit() {
    // Añadido para el cambio de idioma
    this.currentLang = this.i18nService.getCurrentLanguage();
    console.log('this.currentLang', this.currentLang);
  }

  // Función para el cambio de idioma (Añadido para el cambio de idioma)
  changeLanguage(event: CustomEvent) {
    console.log("event", event.detail.value);
    this.i18nService.changeLanguage(event.detail.value);
  }
}
