import React, { PureComponent, Fragment } from 'react';
import SectionHeader from 'src/components/common/molecules/SectionHeader';
import Cognizant from 'src/assets/images/cognizant.png';
import VGTULogo from 'src/assets/images/vgtu.png';
import VilniusLogo from 'src/assets/images/vilnius.png';
import SunriseValleyLogo from 'src/assets/images/sunrise-valley.png';
import style from './Sponsors.module.scss';

export default class Sponsors extends PureComponent {
  render() {
    const sponsors = [
      { src: VilniusLogo, alt: 'Vilnius', width: '150px' },
      { src: Cognizant, alt: 'Cognizant', width: '150px' },
      { src: SunriseValleyLogo, alt: 'Sunrise valley', width: '200px' },
      { src: VGTULogo, alt: 'Vgtu', width: '170px' },
    ];
    return (
      <Fragment>
        <SectionHeader
          head="GETPET INICIATYVĄ PALAIKO"
          subHead="Organizacijos ir įmonės:"
        />
        <ul className={style.sponsors}>
          {sponsors.map(
            ({ src, alt, width }) => (
              <li className={style.sponsor} key={alt}>
                <img src={src} alt={alt} width={width} />
              </li>
            ),
          )}
        </ul>
      </Fragment>
    );
  }
}
