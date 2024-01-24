import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-beer-catalog',
  templateUrl: './beer-catalog.page.html',
  styleUrls: ['./beer-catalog.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonButtons, IonButton]
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
