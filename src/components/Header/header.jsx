import React from 'react';
import NavigationBar from 'src/components/NavigationBar';
import style from './header.module.css';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={style.header}>
        <NavigationBar />
      </div>
    );
  }
}
