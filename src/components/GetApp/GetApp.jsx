import React, { PureComponent, Fragment } from 'react';
import dogoLogo from 'src/assets/dogo.png';
import style from './GetApp.module.scss';

export default class GetApp extends PureComponent {
  render() {
    return (
      <Fragment>
        <img className={style.image} src={dogoLogo} alt="pic" />
      </Fragment>
    );
  }
}
