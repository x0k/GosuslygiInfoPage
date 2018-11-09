import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import PropTypes from 'prop-types';
import './collapsibleItem.css';

class CollapsibleItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  toggle () {
    this.setState((state, props) => {
      const expanded = !state.expanded;
      if (props.onExpand && expanded) {
        props.onExpand(this);
      }
      if (props.onCollapse && !expanded) {
        props.onCollapse(this);
      }
      return { expanded };
    });
  }

  open () {
    this.setState((state, props) => {
      if (props.onExpand && !state.expanded) {
        props.onExpand(this);
      }
      return { expanded: true };
    });
  }

  close () {
    this.setState((state, props) => {
      if (props.onCollapse && state.expanded) {
        props.onCollapse(this);
      }
      return { expanded: false };
    });
  }

  render() {
    let itemClassName = 'collapsible-item',
      buttonClassName = 'collapsible-item__trigger',
      descriptionClassName = 'collapsible-item__description',
      buttonText = 'Посмотреть';
    if (!this.props.description) {
      buttonClassName += ' collapsible-item__trigger_disabled';
    } else if (this.state.expanded) {
      itemClassName += ' collapsible-item_expanded';
      buttonClassName += ' collapsible-item__trigger_active';
      descriptionClassName += ' collapsible-item__description_showed';
      buttonText = 'Скрыть';
    }
    return (
      <div className={itemClassName}>
        <input type="button" className={buttonClassName} onClick={this.toggle} value={buttonText} />
        <div className="collapsible-item__data">
          <div className="collapsible-item__title">{this.props.title}</div>
          <Collapse isOpened={this.state.expanded}>
            <div className={descriptionClassName}>{this.props.description}</div>
          </Collapse>
        </div>
      </div>
    );
  }
}

CollapsibleItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onExpand: PropTypes.func,
};

export default CollapsibleItem;