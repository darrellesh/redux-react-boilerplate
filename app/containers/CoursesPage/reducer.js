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
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';
import { CREATE_COURSE, DELETE_COURSE, STAR_COURSE } from './constants';

// The initial state of the App
const initialState = {
  courses: [],
};

const initialState3 = {
  courses: [1, 2],
  coursesById: {
    1: {
      id: 1,
      title: 'title one',
    },
    2: {
      id: 2,
      title: 'title two',
    },
  },
};

export function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return {
        courses: state.concat(action.course),
      };
    default:
      return state;
  }
}

export function coursesReducer1(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:

      return [
        ...state,
        Object.assign({}, action.course),
      ];
    default:
      return state;
  }
}

export function coursesReducer2(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:

      return [
        ...state,
        {
          id: action.course.id,
          title: action.course.title,
        },
      ];
    default:
      return state;
  }
}

export function coursesReducer3(state = initialState3, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return {
        courses: state.courses.concat(action.course.id),
        coursesById: {
          ...state.coursesById,
          [action.course.id]: {
            id: action.course.id,
            title: action.course.title,
          },
        },
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter((id) => id !== action.course.id),
        coursesById: omit(state.coursesById, action.course.id),
      };
    case STAR_COURSE:
      return {
        ...state,
        coursesById: mapValues(state.coursesById, (course) => course.id === action.course.id ?
            assign({}, course, { starred: !course.starred }) :
            course),
      };

    default:
      return state;
  }
}
