/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { CREATE_COURSE } from './constants';

// The initial state of the App
const initialState = {
  courses: [],
};

function coursesReducer(state = initialState, action) {
  console.log(state);
  console.log(action.course);
  switch (action.type) {
    case CREATE_COURSE:
      return {
        courses: state.concat(action.course),
      };

      // return [
      //   ...state,
      //   Object.assign({}, action.course),
      // ];
    default:
      return state;
  }
}

export default coursesReducer;
