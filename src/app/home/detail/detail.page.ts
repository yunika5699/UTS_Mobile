import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/model/Item.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item : Item;
  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {return ;}
      const itemId = parseInt(paramMap.get('itemId'));
      this.item = this.itemService.getItem(itemId);
    });
  }

}
