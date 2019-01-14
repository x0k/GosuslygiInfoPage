import React from 'react';
import './Logo.css';

export default function Logo ({ className, src, title, subtitle }) {
  let classNames = 'logo';
  if (className) {
    classNames += ` ${className}`;
  }
  return (
    <div className={classNames}>
      <img src={src} alt="logo" className="logo__img" />
      <div className="logo__data">
        <div className="logo__title">{title}</div>
        <div className="logo__subtitle">{subtitle}</div>
      </div>
    </div>
  );
}