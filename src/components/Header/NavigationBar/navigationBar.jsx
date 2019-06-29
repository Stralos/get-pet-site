import React from 'react';
import HREFS from 'src/utils/links';
import style from './navigationBar.module.scss';

export default class NavigationBar extends React.PureComponent {
  render() {
    return (
      <nav className={style.navigationBar}>
        <a className={style.link} href={HREFS.ABOUT}>Apie GetPet</a>
        <a className={style.link} href={HREFS.HOW_TO_USE}>KAIP NAUDOTIS</a>
        <a className={style.link} href={HREFS.TEAM}>KOMANDA</a>
        <a className={style.link} href={HREFS.NEWS}>Naujienos</a>
        <a className={style.link} href={HREFS.FAQ}>D.U.K.</a>
        <a className={style.link} href={HREFS.SPONSORS}>Remejai</a>
        <a className={style.link} href={HREFS.CONTACTS}>Kontaktai</a>
      </nav>
    );
  }
}
