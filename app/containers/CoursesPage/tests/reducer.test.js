import { coursesReducer, coursesReducer1, coursesReducer2, coursesReducer3 } from '../reducer';
import { createCourse } from '../actions';

describe('coursesReducer', () => {
  let state;
  beforeEach(() => {
    state =
      [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }];
  });

  it('should handle the createCourse action correctly with coursesReducer', () => {
    const fixture = { id: 3, title: 'title three' };
    const expectedResult = { courses: [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }, { id: 3, title: 'title three' }] };
    console.log(expectedResult);
    expect(coursesReducer(state, createCourse(fixture))).toEqual(expectedResult);
  });
});

describe('coursesReducer1', () => {
  let state;
  beforeEach(() => {
    state =
      [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }];
  });


  it('should handle the createCourse action correctly with coursesReducer1', () => {
    const fixture = { id: 3, title: 'title three' };
    const expectedResult = [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }, { id: 3, title: 'title three' }];
    console.log(expectedResult);
    expect(coursesReducer1(state, createCourse(fixture))).toEqual(expectedResult);
  });
});

describe('coursesReducer2', () => {
  let state;
  beforeEach(() => {
    state =
      [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }];
  });


  it('should handle the createCourse action correctly with coursesReducer2', () => {
    const fixture = { id: 3, title: 'title three' };
    const expectedResult = [{ id: 1, title: 'title one' }, { id: 2, title: 'title two' }, { id: 3, title: 'title three' }];
    console.log(expectedResult);
    expect(coursesReducer2(state, createCourse(fixture))).toEqual(expectedResult);
  });
});

describe('coursesReducer3', () => {
  let state;
  beforeEach(() => {
    state =
    { courses: [1, 2],
      coursesById: {
        1: {
          id: 1,
          title: 'title one',
        },
        2: {
          id: 2,
          title: 'title two',
        },
      } };
  });


  it('should handle the createCourse action correctly with coursesReducer3', () => {
    const fixture = { id: 3, title: 'title three' };
    const expectedResult = { courses: [1, 2, 3], coursesById: { 1: { id: 1, title: 'title one' }, 2: { id: 2, title: 'title two' }, 3: { id: 3, title: 'title three' } } };
    console.log(expectedResult);
    expect(coursesReducer3(state, createCourse(fixture))).toEqual(expectedResult);
  });
});
