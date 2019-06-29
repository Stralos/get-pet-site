import React from 'react';
import SubHeader from 'src/components/common/SubHeader';
import leseLogo from 'src/assets/lese-logo.png';
import sosGyvunaiLogo from 'src/assets/sos-gyvunai-logo.png';
import vggnLogo from 'src/assets/vggn-logo.png';
import GetToKnow from './GetToKnow';
import style from './About.module.scss';

export default class About extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <ul className={style.instructionList}>
            <li className={style.instruction}>
              <GetToKnow />
            </li>
            <li className={style.instruction}>
              <GetToKnow />
            </li>
            <li className={style.instruction}>
              <GetToKnow />
            </li>
          </ul>

          <SubHeader head="Gyvūnų prieglaudos:" />
          <ul className={style.shelters}>
            <li className={style.shelter}>
              <img className={style.images} src={sosGyvunaiLogo} alt="S.O.S. gyvunai" />
            </li>
            <li className={style.shelter}>
              <img className={style.images} src={leseLogo} alt="Lesė" />
            </li>
            <li className={style.shelter}>
              <img className={style.images} src={vggnLogo} alt="Vilniaus Gyvunu Globos Namai" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
