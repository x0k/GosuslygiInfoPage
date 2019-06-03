import React from 'react'

import { Collapse } from 'react-collapse'

import './style.css'

export default function CollapsibleItem ({ onClick, expanded, title, description }) {
  let itemClassName = 'collapsible-item'
  let buttonClassName = 'collapsible-item__trigger'
  let descriptionClassName = 'collapsible-item__description'
  let buttonText = 'Посмотреть'
  if (!description) {
    buttonClassName += ' collapsible-item__trigger_disabled'
  } else if (expanded) {
    itemClassName += ' collapsible-item_expanded'
    buttonClassName += ' collapsible-item__trigger_active'
    descriptionClassName += ' collapsible-item__description_showed'
    buttonText = 'Скрыть'
  }
  return (
    <div className={itemClassName}>
      <div className="collapsible-item__data">
        <div className="collapsible-item__title">{title}</div>
        <Collapse isOpened={expanded}>
          <div className={descriptionClassName}>{description}</div>
        </Collapse>
      </div>
      <input type="button" className={buttonClassName} onClick={onClick} value={buttonText} />
    </div>
  )
}
