/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import H1 from 'components/H1';
import Img from 'components/Img';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import ReactRouter from './react-routing.png';


export default class LearningPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
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

      </div>
    );
  }
}
