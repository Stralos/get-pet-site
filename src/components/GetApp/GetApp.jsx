import React, { PureComponent, Fragment } from 'react';
import AndroidDownload from 'src/assets/images/google.svg';
import AppleDownload from 'src/assets/images/apple.svg';
import style from './GetApp.module.scss';

export default class GetApp extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className={style.image}>
          <div className={style.links}>
            <a className={style.googleLink} href="https://play.google.com/store/apps/details?id=lt.getpet.getpet">
              <img src={AndroidDownload} alt="android download" />
            </a>
            <a className={style.iosLink} href="https://apps.apple.com/lt/app/getpet/id1450751703">
              <img src={AppleDownload} alt="ios download" />
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
