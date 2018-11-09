import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

class Logo extends Component {
  render() {
    let className = 'logo';
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }
    return (
      <div className={className}>
        <img src={this.props.src} alt="logo" className="logo__img" />
        <div className="logo__data">
          <div className="logo__title">{this.props.title}</div>
          <div className="logo__subtitle">{this.props.subtitle}</div>
        </div>
      </div>
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  src: PropTypes.any.isRequired
};

export default Logo;