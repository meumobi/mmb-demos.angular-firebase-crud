import { Injectable, Signal, computed, signal } from '@angular/core';
import { ItemMockData } from '../../item-mock.data';
import { Item } from '../../item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemMockService {
  // Copy object references into the new array (shallow copy)
  // https://stackoverflow.com/questions/7486085/copy-array-by-value
  private readonly state = {
    $items: signal<Item[]>([...ItemMockData.data]),
  };

  get $data(): Signal<Item[]> {
    return this.state.$items.asReadonly();
  }

  get $countItems(): Signal<number> {
    return computed(() => this.state.$items().length);
  }

  getById(id: string | null): Promise<Item | null> {
    const item = this.$data().find((x) => x.id === id);

    return new Promise((resolve) =>
      setTimeout(() => resolve(item ?? null), 2000)
    );
  }

  update(toUpdateItemId: string, data: Partial<Item>): Promise<void> {
    const newItemList = this.$data().map((item) => {
      if (item.id === toUpdateItemId) {
        return { ...item, ...data, updatedAt: new Date().toISOString() };
      }
      return item;
    });
    this.state.$items.set(newItemList);

    return new Promise((resolve) =>
      setTimeout(() => {
        this.state.$items.set(newItemList);
        return resolve();
      }, 2000)
    );
  }

  create(item: Item): Promise<void> {
    const newItem: Item = {
      ...item,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return new Promise((resolve) =>
      setTimeout(() => {
        this.state.$items.update((items) => [...items, newItem]);
        return resolve();
      }, 2000)
    );
  }

  delete(toDeleteItemId: string): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(() => {
        this.state.$items.update((items) =>
          items.filter((item) => item.id !== toDeleteItemId)
        );
        return resolve();
      }, 2000)
    );
  }
}
