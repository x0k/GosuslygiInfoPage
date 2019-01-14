import React from 'react';
import Logo from '../logo/Logo';
import img from './assets/logo.png';
import Collapsible from '../collapsible/Collapsible';
import items from './assets/fixtures';
import './App.css';

export default function App () {
  return (
    <div className="app">
      <header className="app__header">
        <Logo className="app__logo" src={img} title="Репозиторий госуслуг" subtitle="Республики Коми" />
        Госуслуги
      </header>
      <div className="app__wrapper">
        <div className="app__content">
          <Collapsible items={items} />
        </div>
      </div>
      <footer className="app__footer">
        © 2018 ГАУ РК "ЦИТ". Все права защищены
      </footer>
    </div>
  );
}