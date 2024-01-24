import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  appsOutline,
  appsSharp,
  barbellOutline,
  barbellSharp,
  calendarOutline,
  calendarSharp,
  beerOutline,
  beerSharp,
  addOutline,
  addSharp,
  menuOutline,

} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    
  ],
})
export class AppComponent {
  public appPages = [
    {title: 'Resumen del día', url: '/daily-summary', icon: 'calendar'},
    {title: 'Estadísticas', url: '/stats', icon: 'barbell'},
    {title: 'Catálogo de cervezas', url: '/beer-catalog', icon: 'beer'},
    {title: 'Añadir cerveza', url: '/add-beer', icon: 'add'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {
    addIcons({
      appsOutline,
      appsSharp,
      barbellOutline,
      barbellSharp,
      calendarOutline,
      calendarSharp,
      beerOutline,
      beerSharp,
      addOutline,
      addSharp,
      menuOutline
    });
  }
}
