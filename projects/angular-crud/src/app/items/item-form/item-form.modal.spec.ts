import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormModal } from './item-form.modal';

describe('ItemFormModal', () => {
  let component: ItemFormModal;
  let fixture: ComponentFixture<ItemFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFormModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemFormModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
