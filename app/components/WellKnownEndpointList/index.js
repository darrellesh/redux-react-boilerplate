import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import WellKnownEndpointListItem from 'containers/WellKnownEndpointListItem';

function WellKnownEndpointList({ loading, error, listItems }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (listItems !== false) {
    return <List items={listItems} component={WellKnownEndpointListItem} />;
  }

  return null;
}

WellKnownEndpointList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  listItems: PropTypes.any,
};

export default WellKnownEndpointList;
