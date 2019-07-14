import React, { PureComponent, Fragment } from 'react';
import style from './GetApp.module.scss';

export default class GetApp extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className={style.image} />
      </Fragment>
    );
  }
}
