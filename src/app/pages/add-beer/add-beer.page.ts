import { Component, OnInit ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cerveza } from 'src/app/model/cerveza';
import { CervezaService } from 'src/app/shared/services/cerveza.service';
import { ActivatedRoute, Router } from '@angular/router';
import { menuOutline,camera } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonButton, IonButtons, IonMenu, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonItem, IonInput, IonLabel,IonSelect, IonSelectOption, IonIcon ,IonFab ,IonFabButton ,IonImg ,IonCol ,IonRow ,IonGrid } from '@ionic/angular/standalone';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';

// Importaciones de la galeria/fotos
import { PhotoService, UserPhoto } from 'src/app/shared/services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.page.html',
  styleUrls: ['./add-beer.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonImg, IonFabButton, IonFab, IonIcon, CommonModule,
    FormsModule, IonButtons, IonButton, IonMenu, IonContent, IonHeader, IonToolbar, 
    IonMenuButton, IonTitle, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, 
    TranslateModule,ReactiveFormsModule ]
})
export class AddBeerPage implements OnInit {

  @Input() id?: string;

  cervezaForm!: FormGroup;
  buttonText: string = '';
  currentLang: string = '';
  base64: any = null;

  constructor(
    private i18nService: I18nService,
    private translateService: TranslateService,
    private cervezaService: CervezaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,

    // De las ftos
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
    
  ) { 
    addIcons({
      menuOutline,
      camera,
    });
  }

  ngOnInit(): void{

    // Para lo de las fotos
    this.photoService.loadSaved();

    this.currentLang = this.i18nService.getCurrentLanguage();
    console.log('this.currentLang', this.currentLang);
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.id);

    if (this.id) {
      this.cervezaService.getCervezaById(this.id).subscribe((data) => {
        const cerveza: Cerveza = data;
        this.initForm(cerveza);
      });
    } else {
      this.initForm();
    }
    this.setButtonText();
  });
  }

    // Funcion para lo de la galeria
    // public async showActionSheet(photo: UserPhoto, position: number) {
    //   const actionSheet = await this.actionSheetController.create({
    //     header: 'Photos',
    //     buttons: [{
    //       text: 'Delete',
    //       role: 'destructive',
    //       icon: 'trash',
    //       handler: () => {
    //         this.photoService.deletePicture(photo, position);
    //       }
    //     }, {
    //       text: 'Cancel',
    //       icon: 'close',
    //       role: 'cancel',
    //       handler: () => {
    //         // Nothing to do, action sheet is automatically closed
    //         }
    //     }]
    //   });
    //   await actionSheet.present();
    // }

    setButtonText() {
      if (this.id) {
        this.buttonText = this.translateService.instant("UPDATEBUTTON") ;
      } else {
        this.buttonText = this.translateService.instant("ADDBUTTON") ;
      }
    }

    initForm(cerveza:Cerveza={} as Cerveza){
      this.cervezaForm = this.formBuilder.group({
        beerName: [cerveza.beerName, Validators.required],
        beerVolume: [cerveza.beerVolume, Validators.required],
        beerVolumeUnit: [cerveza.beerVolumeUnit, Validators.required],
        beerEnergyValue: [cerveza.beerEnergyValue, Validators.required],
        image: [cerveza.image]
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

    async addPhotoToGallery() {
      this.base64 = await this.photoService.addNewToGallery();
     // console.log('base64', base64);
      this.cervezaForm.get('image')?.setValue(this.base64);
    }

     // Función para el cambio de idioma 
    changeLanguage(event: CustomEvent) {
      console.log("event", event.detail.value);
      this.i18nService.changeLanguage(event.detail.value);
      setTimeout(() => {
        this.setButtonText();
      }, 200);
    }
}
