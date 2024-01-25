import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButtons, IonButton, IonMenu } from '@ionic/angular/standalone';

@Component({
  selector: 'app-daily-summary',
  templateUrl: './daily-summary.page.html',
  styleUrls: ['./daily-summary.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonButtons, IonButton, IonMenu]
})
export class DailySummaryPage implements OnInit { 

  constructor() {
    addIcons({
      menuOutline
    });
  }

  ngOnInit() {
  }

}
