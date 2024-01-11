import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../item.model';
import { ItemService } from '../shared/services';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './item-form.modal.html',
  styleUrl: './item-form.modal.scss',
})
export class ItemFormModal implements OnInit {
  private isCreateMode: boolean;
  private isLoading = false;

  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ItemFormModal>,
    private fb: NonNullableFormBuilder,
    private itemService: ItemService,
    @Inject(MAT_DIALOG_DATA) public data: Item
  ) {
    this.isCreateMode = data == undefined;

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    if (!this.isCreateMode) {
      this.form.patchValue(this.data);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  public onClickClose(): void {
    this.dialogRef.close();
  }

  public async onClickSave(): Promise<void> {
    this.isLoading = true;

    if (this.isCreateMode) {
      await this.createItem(this.form.value);
    } else {
      await this.updateItem(this.form.value);
    }
    this.isLoading = false;

    this.dialogRef.close();
  }

  private createItem(item: Item): Promise<void> {
    return this.itemService
      .create(item)
      .then(() => console.log('Item created successfully!'))
      .catch((error) => {
        console.error(error);
      });
  }

  private updateItem(item: Item): Promise<void> {
    if (this.data && this.data.id) {
      return this.itemService
        .update(this.data.id, item)
        .then(() => console.log('Item updated successfully!'))
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Couldn't update item: missing item.id");
      return Promise.resolve();
    }
  }
}
