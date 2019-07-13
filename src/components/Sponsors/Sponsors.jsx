import React, { PureComponent, Fragment } from 'react';
import SectionHeader from 'src/components/common/molecules/SectionHeader';
import VGTULogo from 'src/assets/images/vgtu.png';
import VilniusLogo from 'src/assets/images/vilnius.png';
import SunriseValleyLogo from 'src/assets/images/sunrise-valley.png';
import style from './Sponsors.module.scss';

export default class Sponsors extends PureComponent {
  render() {
    return (
      <Fragment>
        <SectionHeader
          head="GETPET INICIATYVĄ PALAIKO"
          subHead="Organizacijos ir įmonės:"
        />
        <ul className={style.sponsors}>
          <li>
            <img src={VilniusLogo} alt="vilnius" />
          </li>
          <li>
            <img src={SunriseValleyLogo} alt="sunrile valley" />
          </li>
          <li>
            <img src={VGTULogo} alt="vgtu" />
          </li>
        </ul>
      </Fragment>
    );
  }
}
