import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { ItemService } from '../shared/services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './item-list.page.html',
  styleUrl: './item-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListPage {
  itemService = inject(ItemService);

  public $items: Signal<Item[]> = this.itemService.$data;
  public $countItems: Signal<number> = this.itemService.$countItems;

  public onClickEdit(item: Item): void {
    console.log('clicked row', item);
  }

  public onClickCreate() {
    console.log('Create item');
  }
}
