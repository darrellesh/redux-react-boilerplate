/**
 * Gets the list items from a well known endpoint
 */

import { takeLatest } from 'redux-saga/effects';
import { CREATE_COURSE } from 'containers/App/constants';

/**
 * Well known endpoint listItems request/response handler
 */
export function* addCourseData() {
  const existingCourses = (state) => state.courses;
  console.log(existingCourses);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* watchCreateCourse() {
  // Watches for LOAD_ITEMS actions and calls getListItems when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  yield takeLatest(CREATE_COURSE, addCourseData);
}

// Bootstrap sagas
export default [
  watchCreateCourse,
];

