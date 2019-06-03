import React, { useEffect, useState } from 'react'

import Logo from '../components/logo'

import Accordion from './accordion'

import './style.css'

import img from '../assets/logo.png'
import items from '../assets/fixtures'

const loadItems = Promise.resolve(items)

export default function App () {
  const [items, setItems] = useState([])
  useEffect(() => {
    if (items.length === 0) {
      loadItems.then(setItems)
    }
  })
  return (
    <div className="app">
      <header className="app__header">
        <Logo className="app__logo" src={img} title="Репозиторий госуслуг" subtitle="Республики Коми" />
        Госуслуги
      </header>
      <div className="app__wrapper">
        <div className="app__content">
          {items.length ? <Accordion items={items} /> : 'Loading...'}
        </div>
      </div>
      <footer className="app__footer">
        © 2018 ГАУ РК "ЦИТ". Все права защищены
      </footer>
    </div>
  )
}