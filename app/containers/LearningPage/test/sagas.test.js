/**
 * Tests for HomePage sagas
 */

import { put } from 'redux-saga/effects';

import { itemsLoaded, itemLoadingError } from 'containers/App/actions';

import { getListItems } from '../sagas';

/* eslint-disable redux-saga/yield-effects */
describe('getListItems Saga', () => {
  let getListItemsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getListItemsGenerator = getListItems();

    const selectDescriptor = getListItemsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the listItemsLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First item',
    }, {
      name: 'Second item',
    }];
    const putDescriptor = getListItemsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(itemsLoaded(response)));
  });

  it('should call the itemLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getListItemsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(itemLoadingError(response)));
  });
});
