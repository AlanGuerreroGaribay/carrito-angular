import { Component, ElementRef } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  storedItems: any = [];
  selectedItem: any;
  counter: number = 0;

  constructor(
    private requestService: RequestsService,
    private elm: ElementRef
  ) {}

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

  setTitle(){
    
  }
}
