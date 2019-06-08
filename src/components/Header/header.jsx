import React from 'react';
import NavigationBar from './NavigationBar';
import style from './header.module.scss';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={style.header}>
        <NavigationBar />
      </div>
    );
  }
}
