import React, { Component } from 'react';
import CollapsibleItem from '../collapsibleItem/collapsibleItem';

class Collapsible extends Component {

  state = {
    open: null,
  }

  toogle = (id) => () => this.setState(state => {
    const { open } = state;
    if (id === open) {
      return { open: null };
    }
    return { open: id };
  })

  render () {
    const { open } = this.state;
    const { items } = this.props;
    return items.map((item, itemId) => (
      <CollapsibleItem
        key={item.id}
        onClick={this.toogle(itemId)}
        expanded={open === itemId}
        {...item}
      />
    ));
  }

}

export default Collapsible;