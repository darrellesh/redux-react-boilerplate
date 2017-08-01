import coursesReducer from '../reducer';
import { createCourse } from '../actions';

describe('coursesReducer', () => {
  let state;
  beforeEach(() => {
    state =
      [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }];
  });


  it('should handle the createCourse action correctly', () => {
    const fixture = { id: 3, title: 'title three' };
    const expectedResult = { courses: [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }, { id: 3, title: 'title three' }] };

    expect(coursesReducer(state, createCourse(fixture))).toEqual(expectedResult);
  });
});
