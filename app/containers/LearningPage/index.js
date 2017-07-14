/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import A from 'components/A';
import H1 from 'components/H1';
import H2 from 'components/H1';
import Img from 'components/Img';
import StyledButton from 'components/Button';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import ReactRouter from './react-routing.png';
import { loadItems } from '../App/actions';
import {createStructuredSelector} from "reselect";
import WellKnownEndpointList from 'components/WellKnownEndpointList';
import { makeSelectListItems, makeSelectLoading, makeSelectError } from 'containers/App/selectors';


export class LearningPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {

    const { loading, error, listItems } = this.props;
    console.log("props---")
    const wellKnownEndpointListProps = {
      loading,
      error,
      listItems,
    };

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


          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
              <FormattedMessage {...messages.trymeMessage}/>
              <StyledButton onClick={this.props.onLoadItems}> <FormattedMessage {...messages.trymeHeader}/> </StyledButton>
        <WellKnownEndpointList {...wellKnownEndpointListProps} />
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
  onLoadItems: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadItems: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadItems());
    },
  };
};


const mapStateToProps = createStructuredSelector({
  listItems: makeSelectListItems(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearningPage);
