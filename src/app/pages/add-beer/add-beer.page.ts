import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.page.html',
  styleUrls: ['./add-beer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonButtons, IonButton]
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
