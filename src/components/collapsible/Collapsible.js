import React, { Component } from 'react';
import CollapsibleItem from '../collapsibleItem/collapsibleItem';

class Collapsible extends Component {

  constructor (props) {
    super(props);
    this.state = {
      expanded: null
    };
    this.onExpand = this.onExpand.bind(this);
  }

  onExpand (item) {
    this.setState(state => {
      if (state.expanded && state.expanded !== item) {
        state.expanded.close();
      }
      return {
        expanded: item
      };
    });
  }

  render() {
    const items = this.props.items.map(item => <CollapsibleItem key={item.id} {...item} onExpand={this.onExpand}/>);
    return (
      <div className="collapsible">
        {items}
      </div>
    );
  }
}

export default Collapsible;