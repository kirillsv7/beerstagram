import { Component, OnInit ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cerveza } from 'src/app/model/cerveza';
import { CervezaService } from 'src/app/shared/services/cerveza.service';
import { Router } from '@angular/router';
import { menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel,IonSelect, IonSelectOption } from '@ionic/angular/standalone';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.page.html',
  styleUrls: ['./add-beer.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule, IonButtons, IonButton, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, TranslateModule,ReactiveFormsModule ]
})
export class AddBeerPage implements OnInit {

  @Input() id?: string;

  cervezaForm!: FormGroup;
  buttonText: string = '';

  constructor(
    private i18nService: I18nService,
    private translateService: TranslateService,
    private cervezaService: CervezaService,
    private formBuilder: FormBuilder,
    private router: Router,
    
  ) { 
    addIcons({
      menuOutline
    });
  }

  ngOnInit(): void{
    this.currentLang = this.i18nService.getCurrentLanguage();
    console.log('this.currentLang', this.currentLang);

    if (this.id) {
      this.cervezaService.getCervezaById(this.id).subscribe((data) => {
        const cerveza: Cerveza = data;
        this.buttonText = 'Actualizar';
        this.initForm(cerveza);
        });

      }else{
        this.buttonText = 'Añadir';
        this.initForm();
      }
     
    }
    initForm(cerveza:Cerveza={} as Cerveza){
      this.cervezaForm = this.formBuilder.group({
        beerName: [cerveza.beerName, Validators.required],
        beerVolume: [cerveza.beerVolume, Validators.required],
        beerVolumeUnit: [cerveza.beerVolumeUnit, Validators.required],
        beerEnergyValue: [cerveza.beerEnergyValue, Validators.required]
      });
    }
    addCerveza(){
      const cerveza = this.cervezaForm.value as Cerveza;
      console.log(cerveza);
      if (this.id) {
        cerveza.id = this.id;
        this.cervezaService.updateCerveza(cerveza).then(() => {
          this.router.navigate(['/beer-catalog']);
        });
      } else {
        this.cervezaService.addCerveza(cerveza).then(() => {
          this.router.navigate(['/beer-catalog']);
        });
      }
    }
    deleteCerveza(){
      const cerveza = this.cervezaForm.value as Cerveza;
      if (this.id) {
        cerveza.id = this.id;
        this.cervezaService.deleteCerveza(cerveza).then(() => {
          this.router.navigate(['/beer-catalog']);
        });
      }
    }
 
    // Función para el cambio de idioma 
    changeLanguage(event: CustomEvent) {
      console.log("event", event.detail.value);
      this.i18nService.changeLanguage(event.detail.value);
    }

}
