import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel,IonSelect, IonSelectOption } from '@ionic/angular/standalone';


@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.page.html',
  styleUrls: ['./add-beer.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButtons, IonButton, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption]
})
export class AddBeerPage implements OnInit {
  volume: string = 'cl';

  constructor() { 
    addIcons({
      menuOutline
    });
  }

  ngOnInit() {
  }
  

}
