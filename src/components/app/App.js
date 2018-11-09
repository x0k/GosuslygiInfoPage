import React, { Component } from 'react';
import Logo from '../logo/Logo';
import img from './assets/logo.png';
import Collapsible from '../collapsible/Collapsible';
import items from './assets/fixtures';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Logo className="header__logo" src={img} title="Репозиторий госуслуг" subtitle="Республики Коми" />
          Госуслуги
        </header>
        <div className="content">
          <div className="content__data">
            <Collapsible items={items} />
          </div>
        </div>
        <footer className="footer">
          © 2018 ГАУ РК {'"ЦИТ"'}. Все права защищены
        </footer>
      </div>
    );
  }
}

export default App;
