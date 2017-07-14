/**
 * Gets the list items from a well known endpoint
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_ITEMS } from 'containers/App/constants';
import { itemsLoaded, itemLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Well known endpoint listItems request/response handler
 */
export function* getListItems() {
  const requestURL = `http://5826ed963900d612000138bd.mockapi.io/items`;
  console.log("IM HERE - getListItems");
  try {
    // Call our request helper (see 'utils/request')
    const listItems = yield call(request, requestURL);
    console.log(listItems)
    yield put(itemsLoaded(listItems));
  } catch (err) {
    yield put(itemLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* listItemData() {
  // Watches for LOAD_ITEMS actions and calls getListItems when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_ITEMS, getListItems);
  console.log("IM HERE - listItemData");
  // Suspend execution until location changes
  // yield cancel(watcher);
}

// Bootstrap sagas
export default [
  listItemData,
];
