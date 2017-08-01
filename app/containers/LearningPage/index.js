/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Grid } from 'react-redux-grid';
import * as _ from 'lodash';
import A from 'components/A';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Img from 'components/Img';
import StyledButton from 'components/Button';
import { createStructuredSelector } from 'reselect';
import { makeSelectListItems, makeSelectLoading, makeSelectError, makeSelectComments } from 'containers/App/selectors';
import WellKnownEndpointList from 'components/WellKnownEndpointList';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import ReactRouter from './react-routing.png';
import ImmutableForm from './ImmutableForm';
import { loadItems, loadComments } from '../App/actions';

export class LearningPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    return true;
  }

  showResults = (values) =>
  new Promise((resolve) => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  })

  render() {
    const { loading, error, listItems, comments } = this.props;
    console.log('rendering---');
    const trans = this.context.intl.formatMessage(
      { id: 'boilerplate.containers.LearningPage.form.column.name', defaultMessage: 'testing' });

    console.log(`translation---${trans}`);

    const columns = [{
      name: this.context.intl.formatMessage(
        { id: 'boilerplate.containers.LearningPage.form.column.name', defaultMessage: 'testing' }),
      width: '25%',
      dataIndex: 'name',
    },
      { name: 'Email', width: '25%', dataIndex: 'email' },
      { name: 'Comment', width: '25%', dataIndex: 'body' }];

    const wellKnownEndpointListProps = {
      loading,
      error,
      listItems,
      comments,
    };

    const pageSize = 20;
    const data = _.uniq(comments);

    const simpleData = { columns, data, pageSize, plugins: {}, stateKey: 'gridTest' };

    return (
      <div>
        <Helmet
          title="Learning Page"
          meta={[
            { name: 'description', content: 'Learning page of React.js Boilerplate application' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.routingHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.routingMessage} />
            </p>
            <A href="https://reacttraining.com/react-router/">
              <Img src={ReactRouter} alt="react-router - Logo" />
            </A>
          </ListItem>
        </List>

        <ImmutableForm onSubmit={this.showResults} />

        <H2>
          <FormattedMessage {...messages.trymeHeader} />
        </H2>
        <FormattedMessage {...messages.trymeMessage} />
        <StyledButton onClick={this.props.onLoadItems}> <FormattedMessage {...messages.trymeHeader} /> </StyledButton>
        <WellKnownEndpointList {...wellKnownEndpointListProps} />
        <Grid {...simpleData} />
      </div>
    );
  }
}

LearningPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  listItems: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  comments: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onLoadItems: React.PropTypes.func,
};

LearningPage.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};
export function mapDispatchToProps(dispatch) {
  return {
    onLoadItems: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadItems());
      dispatch(loadComments());
    },
  };
}


const mapStateToProps = createStructuredSelector({
  listItems: makeSelectListItems(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  comments: makeSelectComments(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearningPage);
