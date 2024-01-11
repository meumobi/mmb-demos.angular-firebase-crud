import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  Signal,
  effect,
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
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { ItemFormModal } from '../item-form/item-form.modal';

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
    MatDialogModule,
  ],
  templateUrl: './item-list.page.html',
  styleUrl: './item-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListPage implements OnInit {
  itemService = inject(ItemService);
  private matDialog = inject(MatDialog);
  private injector = inject(Injector);

  dialogConfig = new MatDialogConfig();
  public $items: Signal<Item[]> = this.itemService.$data;
  public $countItems: Signal<number> = this.itemService.$countItems;

  ngOnInit(): void {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;

    effect(
      () => {
        console.log(this.$items());
      },
      { injector: this.injector }
    );
  }

  public onClickEdit(item: Item): void {
    this.dialogConfig.data = { ...item };
    const dialogRef = this.matDialog.open(ItemFormModal, this.dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  public onClickCreate() {
    const dialogRef = this.matDialog.open(ItemFormModal, this.dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
