import React, { Component } from 'react';
import Logo from '../logo/Logo';
import img from './assets/logo.png';
import CollapsibleItem from '../collapsibleItem/collapsibleItem';
import items from './assets/fixtures';
import './App.css';

const loadItems = Promise.resolve(items);

export default class App extends Component {

  state = {
    items: [],
    open: null,
  }

  componentWillMount () {
    loadItems.then(items => this.setState({ items, open: null }));
  }

  toggle = (id) => () => this.setState(state => {
    const { open } = state;
    if (id === open) {
      return { open: null };
    }
    return { open: id };
  })

  render () {
    const { open, items } = this.state;
    return (
      <div className="app">
        <header className="app__header">
          <Logo className="app__logo" src={img} title="Репозиторий госуслуг" subtitle="Республики Коми" />
          Госуслуги
        </header>
        <div className="app__wrapper">
          <div className="app__content">
            {items.map(item => (
              <CollapsibleItem
                key={item.id}
                onClick={this.toggle(item.id)}
                expanded={open === item.id}
                {...item}
              />
            ))}
            {!Boolean(items.length) && 'Loading...'}
          </div>
        </div>
        <footer className="app__footer">
          © 2018 ГАУ РК "ЦИТ". Все права защищены
        </footer>
      </div>
    );
  }

}