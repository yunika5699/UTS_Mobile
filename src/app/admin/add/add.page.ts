import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/model/Item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private type: Text;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  onTypeChange(form: NgForm){
    this.type = form.value.type;
  }

  onSubmit(form: NgForm){
    if(form.value.type == "GPU"){
      this.itemService.addGPU(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock);
      this.showToast()
    }else if(form.value.type == "CPU"){
      this.itemService.addCPU(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.baseclock,form.value.boostclock,form.value.core,form.value.thread);
      this.showToast()
    }else if(form.value.type == "RAM"){
      this.itemService.addRAM(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.speed,form.value.size);
      this.showToast()
    }else if(form.value.type == "Motherboard"){
      this.itemService.addMotherboard(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.chipset,form.value.forProc);
      this.showToast()
    }
  }

  async showToast(){
    const toast = await this.toastCtrl.create({
      message: 'Item Berhasil Ditambahkan',
      position : 'top',
      color: 'secondary',
      duration: 5000
    });
    toast.present();

    this.router.navigate(['/', 'admin']);
  }
}
