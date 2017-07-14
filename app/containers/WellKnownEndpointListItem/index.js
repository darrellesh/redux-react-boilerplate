/**
 * WellKnownEndpointListItem
 *
 * Lists the name and id from the item
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ListItem from 'components/ListItem';


export class WellKnownEndpointListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    console.log(item);


return null;

    // Render the content into a list item
   // return (
   //   <ListItem key={`list-item-${item.id}`} item={item.label} />
   // );
  }
}

WellKnownEndpointListItem.propTypes = {
  item: React.PropTypes.object,

};

export default connect(createStructuredSelector({

}))(WellKnownEndpointListItem);
