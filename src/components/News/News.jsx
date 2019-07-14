import React, { PureComponent, Fragment } from 'react';
import SectionHeader from 'src/components/common/molecules/SectionHeader';
import Facebook from 'src/assets/icons/Facebook';
import Instagram from 'src/assets/icons/Instagram';
import style from './News.module.scss';

export default class News extends PureComponent {
  render() {
    return (
      <Fragment>
        <SectionHeader
          className={style.head}
          head="NAUJIENAS galite sekti mūsų Facebook ir Instagram"
        />
        <div className={style.actions}>
          <a className={style.link} href="https://www.facebook.com/getpet.lt/">
            <Facebook className={style.facebookIcon} />
          </a>
          <a className={style.link} href="https://www.instagram.com/getpet.lt/">
            <Instagram className={style.facebookIcon} />
          </a>
        </div>
      </Fragment>
    );
  }
}
