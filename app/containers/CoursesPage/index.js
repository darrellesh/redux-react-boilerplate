/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCourses } from 'containers/App/selectors';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Input from './Input';
import { createCourse } from '../App/actions';

export class CoursesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' },
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave() {
    this.props.dispatch(createCourse(this.state.course));
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const { courses } = this.props;
    console.log(`courses from props---${courses}`);
    const { title } = courses;
    console.log(`courses title from props---${title}`);

    return (
      <div>
        <Helmet
          title="Courses Page"
          meta={[
            { name: 'description', content: 'Courses page of pluralsight react-redux training' },
          ]}
        />

        <H1>Courses</H1>
        {title}
        <H2>Add Course</H2>
        <Input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <Input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  courses: makeSelectCourses(),
});


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(CoursesPage);
