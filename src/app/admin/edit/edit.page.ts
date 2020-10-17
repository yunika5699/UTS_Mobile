import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/model/Item.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  item : Item;
  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {return ;}
      const itemId = parseInt(paramMap.get('itemId'));
      this.item = this.itemService.getItem(itemId);
    });
  }

  onSubmit(form: NgForm){
    console.log(form);
    if(this.item.type == "GPU"){
      this.itemService.editGPU(this.item.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock);
      this.presentToast()
    }else if(this.item.type == "CPU"){
      this.itemService.editCPU(this.item.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.baseclock,form.value.boostclock,form.value.core,form.value.thread);
      this.presentToast()
    }else if(this.item.type == "RAM"){
      this.itemService.editRAM(this.item.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.speed,form.value.size);
      this.presentToast()
    }else if(this.item.type == "Motherboard"){
      this.itemService.editMotherboard(this.item.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.chipset,form.value.forProc);
      this.presentToast()
    }
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Item Berhasil Diubah',
      position : 'top',
      color: 'secondary',
      duration: 5000
    });
    toast.present();

    this.router.navigate(['/', 'admin']);
  }

}
