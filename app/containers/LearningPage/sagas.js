/**
 * Gets the list items from a well known endpoint
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ITEMS, LOAD_COMMENTS } from 'containers/App/constants';
import { itemsLoaded, itemLoadingError, commentsLoaded, commentLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Well known endpoint listItems request/response handler
 */
export function* getListItems() {
  const requestURL = 'http://5826ed963900d612000138bd.mockapi.io/items';
  try {
    // Call our request helper (see 'utils/request')
    const listItems = yield call(request, requestURL);
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
  yield takeLatest(LOAD_ITEMS, getListItems);
}

// Bootstrap sagas
export default [
  listItemData,
  commentsData,
];


export function* getComments() {
  const requestURL = 'https://jsonplaceholder.typicode.com/comments';
  try {
    const comments = yield call(request, requestURL);
    yield put(commentsLoaded(comments));
  } catch (err) {
    yield put(commentLoadingError(err));
  }
}

export function* commentsData() {
  yield takeLatest(LOAD_COMMENTS, getComments);
}
