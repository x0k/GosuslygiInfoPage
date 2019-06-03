import React, { useState } from 'react'

import CollapsibleItem from '../components/collapsibleItem'

export default function Accordion ({ items }) {
  const [open, setOpen] = useState(null)
  const clickHandler = (id) => () => setOpen(id !== open && id)
  return items.map(({ id, ...props }) => (
    <CollapsibleItem
      key={id}
      onClick={clickHandler(id)}
      expanded={open === id}
      {...props}
    />
  ))
}