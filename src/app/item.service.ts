import { Injectable } from '@angular/core';
import { Cpu } from './model/Cpu.model';
import { Gpu } from './model/Gpu.model';
import { Item } from './model/Item.model';
import { Motherboard } from './model/Motherboard.model';
import { Ram } from './model/Ram.model';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private total = 9;
  private item : Item[] = [];

  private cpu: Cpu[] = [
    {
        id: 1,
        photo: 'https://www.amd.com/system/files/styles/992px/private/2019-06/238593-ryzen-5-pib-left-facing-1260x709.png?itok=umdtyaSy',
        name: 'Ryzen 5 3600',
        brand: 'AMD',
        price: 3199000 ,
        stock: 5,
        type: 'CPU',
        baseclock: 3.6,
        boostclock: 4.2,
        core: 6,
        thread: 12
    },
    {
        id: 2,
        photo: 'https://ecs7.tokopedia.net/img/product-1/2020/6/9/9651507/9651507_db5df2ef-5ee2-4d85-a5c9-12a9e6f4991c_682_682',
        name: 'Intel Core i5-10600',
        brand: 'Intel',
        price: 3499000,
        stock: 2,
        type: 'CPU',
        baseclock: 3.3,
        boostclock: 4.8,
        core: 6,
        thread: 12
    }
  ]

  
  private ram: Ram[] = [
    {
        id: 3,
        photo: 'https://ecs7.tokopedia.net/img/product-1/2016/6/7/9650943/9650943_8858236c-cd19-456f-aa98-d08109f043f4.jpg',
        name: 'DDR4 Vengeance LPX PC25600',
        brand: 'Corsair',
        price: 1259000,
        stock: 10,
        speed: 3200,
        size: '16GB (2X8GB)',
        type: 'RAM'
    },
    {
        id: 4,
        photo: 'https://ecs7.tokopedia.net/img/product-1/2019/10/4/9651507/9651507_ca133898-1b91-4543-83b8-e7a4959337f2_1100_1100',
        name: 'DDR4 TridentZ Neo RGB PC25600',
        brand: 'Gskill',
        price: 1275000,
        stock: 10,
        speed: 3200,
        size: '16GB (2x8GB)',
        type: 'RAM'
    }
  ]

  private motherboard: Motherboard[] = [
    {
        id: 5,
        photo: 'https://www.asus.com/media/global/products/hvja5zipo40xd0dw/P_setting_000_1_90_end_500.png',
        name: 'TUF Gaming B550M-PLUS',
        brand: 'ASUS',
        price: 2810000,
        stock: 5,
        type: 'Motherboard',
        chipset: 'B550',
        forProc: 'AMD (Socket AM4)'
    },
    {
        id: 6,
        photo: 'https://www.asus.com/media/global/products/gtdqymxlp1lpxdzy/P_setting_000_1_90_end_500.png',
        name: 'TUF Gaming H470-PRO (WI-FI)',
        brand: 'ASUS',
        price: 3109000,
        stock: 2,
        type: 'Motherboard',
        chipset: 'H470',
        forProc: 'Intel(socket LGA1200)'
    }
  ]


  private gpu: Gpu[] = [
    {
        id: 7,
        photo: 'https://ecs7.tokopedia.net/img/product-1/2020/6/27/batch-upload/batch-upload_f761cf1f-4506-4582-88ef-aa4912f1525a.png',
        name: 'RX 5500 XT 4GB',
        brand: 'MSI',
        price: 2799000,
        stock: 10,
        type: 'GPU'
    },
    {
        id: 8,
        photo: 'https://ecs7.tokopedia.net/img/product-1/2020/2/17/batch-upload/batch-upload_68537798-a2c4-4afd-9d98-f81dd6031fbe',
        name: 'GeForce GTX 1650 SUPER 4GB',
        brand: 'MSI',
        price: 3302000,
        stock: 6,
        type: 'GPU'
    }
  ]

  

  

  constructor() { }

  getAllItem(){
    this.item.length = 0;
        this.ram.forEach(element => {
            this.item.push(element as Item);
        });
        this.gpu.forEach(element => {
            this.item.push(element as Item);
        });
        this.cpu.forEach(element => {
            this.item.push(element as Item);
        });
        this.motherboard.forEach(element => {
            this.item.push(element as Item);
        });
        return [...this.item];
  }

  getItem(itemId: number){
    return {...this.item.find(item => {
      return item.id === itemId;
    })};
  }

  deleteItem(itemId: number){
    this.ram = this.ram.filter(item => {
        return item.id !== itemId;
    })
    this.gpu = this.gpu.filter(item => {
        return item.id !== itemId;
    })
    this.cpu = this.cpu.filter(item => {
        return item.id !== itemId;
    })
    this.motherboard = this.motherboard.filter(item => {
        return item.id !== itemId;
    })
  }


  addCPU(CPUName: string, CPUPhoto: string, CPUModel: string, CPUPrice: number, CPUStock: number, CPUBaseclock: number, CPUBoostclock: number, CPUCore: number, CPUThread:number){
    const newData: Cpu = {
        id: this.total,
        name: CPUModel,
        brand: CPUName,
        photo: CPUPhoto,
        price: CPUPrice,
        stock:CPUStock,
        type: "CPU",
        baseclock: CPUBaseclock,
        boostclock: CPUBoostclock,
        core: CPUCore,
        thread: CPUThread
    }

    this.total++;
    this.cpu.push(newData)
}

addRAM(RAMName: string, RAMPhoto: string, RAMModel: string, RAMPrice: number, RAMStock: number, RAMSpeed: number, RAMSize: string){
  const newData: Ram = {
      id: this.total,
      name: RAMModel,
      brand: RAMName,
      photo: RAMPhoto,
      price: RAMPrice,
      stock:RAMStock,
      type: "RAM",
      speed: RAMSpeed,
      size: RAMSize
  }

  this.total++;
  this.ram.push(newData);
}

addMotherboard(MBName: string, MBPhoto: string, MBModel: string, MBPrice: number, MBStock: number, MBChipset: string, MBForProc: string){
  const newData: Motherboard = {
      id: this.total,
      name: MBModel,
      brand: MBName,
      photo: MBPhoto,
      price: MBPrice,
      stock: MBStock,
      type: "Motherboard",
      forProc: MBForProc,
      chipset: MBChipset
  }

  this.total++;
  this.motherboard.push(newData);
}

addGPU(GPUName: string, GPUPhoto: string, GPUModel: string, GPUPrice: number, GPUStock: number){
  const newData: Gpu = {
      id: this.total,
      name: GPUModel,
      brand: GPUName,
      photo: GPUPhoto,
      price: GPUPrice,
      stock:GPUStock,
      type: "GPU"
  }

  this.total++;
  this.gpu.push(newData);
}

editCPU(itemID: number,CPUName: string, CPUPhoto: string, CPUModel: string, CPUPrice: number, CPUStock: number, CPUBaseclock: number, CPUBoostclock: number, CPUCore: number, CPUThread:number){
  this.cpu.find(cpu => {
      if(cpu.id === itemID){
          cpu.name = CPUModel;
          cpu.brand = CPUName;
          cpu.price = CPUPrice;
          cpu.photo = CPUPhoto;
          cpu.stock = CPUStock;
          cpu.baseclock = CPUBaseclock;
          cpu.boostclock = CPUBoostclock;
          cpu.core = CPUCore;
          cpu.thread = CPUThread;
      }
  })
}

editRAM(itemID: number,RAMName: string, RAMPhoto: string, RAMModel: string, RAMPrice: number, RAMStock: number, RAMSpeed: number, RAMSize: string){
  this.ram.find(ram => {
      if(ram.id === itemID){
          ram.name = RAMModel;
          ram.brand = RAMName;
          ram.price = RAMPrice;
          ram.photo = RAMPhoto;
          ram.stock = RAMStock;
          ram.speed = RAMSpeed;
          ram.size = RAMSize;
      }
  })
}

editMotherboard(itemID: number,MBName: string, MBPhoto: string, MBModel: string, MBPrice: number, MBStock: number, MBChipset: string, MBForProc: string){
  this.motherboard.find(mb => {
      if(mb.id === itemID){
          mb.name = MBModel;
          mb.brand = MBName;
          mb.price = MBPrice;
          mb.photo = MBPhoto;
          mb.stock = MBStock;
          mb.chipset = MBChipset;
          mb.forProc = MBForProc;
      }
  })
}

editGPU(itemID: number, GPUName: string, GPUPhoto: string, GPUModel: string, GPUPrice: number, GPUStock: number){
  this.gpu.find(gpu => {
      if(gpu.id === itemID){
          gpu.name = GPUModel;
          gpu.brand = GPUName;
          gpu.price = GPUPrice;
          gpu.photo = GPUPhoto;
          gpu.stock = GPUStock;
      }
  })
}

}
