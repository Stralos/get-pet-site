import React from 'react';
import Logo from 'src/assets/icons/Logo';
import NavigationBar from './NavigationBar';
import style from './header.module.scss';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={style.header}>
        <Logo className={style.logo} />
        <NavigationBar />
      </div>
    );
  }
}
