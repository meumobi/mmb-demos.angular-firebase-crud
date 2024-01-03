import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemService } from '../shared/services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-list.page.html',
  styleUrl: './item-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListPage {
  itemService = inject(ItemService);

  $items = this.itemService.$data;
}
