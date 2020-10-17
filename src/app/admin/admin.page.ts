import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ToastController} from '@ionic/angular';
import { ItemService } from '../item.service';
import { Item } from '../model/Item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit {
  itemList: Item[];
  constructor(
    private toastController : ToastController,
    private itemService: ItemService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.itemList = this.itemService.getAllItem();
  }

  onDelete(item: Item){
    this.itemService.deleteItem(item.id);
    this.itemList = this.itemService.getAllItem();
    this.presentToast()
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Produk Berhasil Dihapus',
      color: 'tertiary',
      position : 'top',
      duration: 5000
    });
    toast.present();
  }

  async presentAlert(item: Item, slidingItem: IonItemSliding) {
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Delete Item?',
      message: 'Deleted Item Cannot be Recovered',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.onDelete(item)
        }
      ]
    });
    await alert.present();
  }

}
