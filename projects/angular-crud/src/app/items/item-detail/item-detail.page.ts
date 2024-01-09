import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ItemService } from '../shared/services';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.page.html',
  styleUrl: './item-detail.page.scss',
})
export class ItemDetailPage {
  item!: Item | null;

  itemService = inject(ItemService);

  // Load the items details when the id changes through the URL :id parameter
  @Input()
  set id(itemId: string) {
    console.log('itemId: ', itemId);
    this.itemService.getById(itemId).then((item) => {
      this.item = item;
    });
  }
}
