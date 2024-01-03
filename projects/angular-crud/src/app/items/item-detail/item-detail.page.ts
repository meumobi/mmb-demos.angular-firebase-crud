import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ItemService } from '../shared/services';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.page.html',
  styleUrl: './item-detail.page.scss',
})
export class ItemDetailPage implements OnInit {
  item!: Item | null;
  private itemId!: string | null;

  itemService = inject(ItemService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.itemService.getById(this.itemId).then((item) => {
      this.item = item;
    });
  }
}
