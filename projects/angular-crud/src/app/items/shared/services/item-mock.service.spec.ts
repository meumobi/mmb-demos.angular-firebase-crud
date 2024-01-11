import { TestBed } from '@angular/core/testing';

import { ItemMockService } from './item-mock.service';
import { ItemMockData } from '../../item-mock.data';

describe('ItemMockService', () => {
  let itemMockService: ItemMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    itemMockService = TestBed.inject(ItemMockService);
  });

  it('should be created', () => {
    expect(itemMockService).toBeTruthy();
  });

  it('should return a non-empty array of items', (done: DoneFn) => {
    expect(!!itemMockService.$data().length).toBeTrue();
    done();
  });
  it('#create should return an array with one new item', (done: DoneFn) => {
    const countItemsOnInit = itemMockService.$data().length;
    itemMockService
      .create({
        title: 'lorem ipsum',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      })
      .then(() => {
        expect(
          itemMockService.$data().length == countItemsOnInit + 1
        ).toBeTrue();
        done();
      });
  });
  it('#update should update item on data store', (done: DoneFn) => {
    const title = 'Updated item';
    const id = '123';
    itemMockService
      .update(id, {
        title,
      })
      .then(() => {
        itemMockService.getById(id).then((item) => {
          expect(item && item.title == title).toBeTrue();
          done();
        });
      });
  });
  it('#delete should return a shorter array, one item left', (done: DoneFn) => {
    const countItemsOnInit = itemMockService.$data().length;
    itemMockService.delete('123').then(() => {
      expect(itemMockService.$data().length == countItemsOnInit - 1).toBeTrue();
      done();
    });
  });
  it('#getById should return an item by id', (done: DoneFn) => {
    itemMockService.getById('123').then((result) => {
      if (result !== null) {
        expect(result['title']).toEqual(ItemMockData.data[0].title);
        done();
      }
      done.fail;
    });
  });
});
