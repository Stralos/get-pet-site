import React, { PureComponent, Fragment } from 'react';
import SectionHeader from 'src/components/common/molecules/SectionHeader';
import style from './News.module.scss';

export default class News extends PureComponent {
  render() {
    return (
      <Fragment>
        <SectionHeader
          className={style.head}
          head="NAUJIENAS galite sekti mūsų Facebook ir Instagram"
        />
      </Fragment>
    );
  }
}
