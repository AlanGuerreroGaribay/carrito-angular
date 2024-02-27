import { Component, ElementRef } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  storedItems: any = [];
  showItems: boolean = false;

  constructor(private requestService: RequestsService) {}

  ngOnInit() {
    this.getStoreItems();
  }

  getStoreItems() {
    this.requestService.getStore().subscribe({
      next: (response) => {
        this.storedItems = response;
      },
    });
  }

  showItem(itemObj: any): void {
    this.storedItems.map((item: any) => {
      if (item !== itemObj && item['visble']) {
        item['visible'] = false;
      }
    });

    itemObj['visible'] = !itemObj['visible'];
  }
}
