/**
 * Tests for HomePage sagas
 */

import { put } from 'redux-saga/effects';

import { itemsLoaded, itemLoadingError, commentsLoaded, commentLoadingError } from 'containers/App/actions';

import { getListItems, getComments } from '../sagas';

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
      name: 'First list item',
    }, {
      name: 'Second list item',
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

describe('getComments Saga', () => {
  let getCommentsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getCommentsGenerator = getComments();

    const selectDescriptor = getCommentsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the listItemsLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First comment',
    }, {
      name: 'Second comment',
    }];
    const putDescriptor = getCommentsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(commentsLoaded(response)));
  });

  it('should call the itemLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getCommentsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(commentLoadingError(response)));
  });
});
