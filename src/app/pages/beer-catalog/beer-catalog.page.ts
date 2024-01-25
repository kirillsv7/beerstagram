import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel,IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-beer-catalog',
  templateUrl: './beer-catalog.page.html',
  styleUrls: ['./beer-catalog.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButtons, IonButton, IonMenu, IonContent, IonHeader,IonToolbar,IonMenuButton,IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption]
})
export class BeerCatalogPage implements OnInit {

  constructor() { 
    addIcons({
      menuOutline
    });
  }

  ngOnInit() {
  }

}
