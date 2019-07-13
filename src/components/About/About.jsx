import React from 'react';
import MiniText from 'src/components/common/atoms/MiniText';
import leseLogo from 'src/assets/lese-logo.png';
import PuppyQuestion from 'src/assets/icons/PuppyQuestion';
import PuppyWiggle from 'src/assets/icons/PuppyWiggle';
import Phone from 'src/assets/icons/Phone';
import sosGyvunaiLogo from 'src/assets/sos-gyvunai-logo.png';
import vggnLogo from 'src/assets/vggn-logo.png';
import GetToKnow from './GetToKnow';

import style from './About.module.scss';

const Loren = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default class About extends React.PureComponent {
  render() {
    return (
      <div>
        <ul className={style.instructionList}>
          <li className={style.instruction}>
            <GetToKnow
              icon={<Phone className={style.phone} />}
              header="Surask"
              text={Loren}
            />
          </li>
          <li className={style.instruction}>
            <GetToKnow
              icon={<PuppyQuestion className={style.puppyQuestion} />}
              header="Pažink"
              text={Loren}
            />
          </li>
          <li className={style.instruction}>
            <GetToKnow
              icon={<PuppyWiggle className={style.puppyWiggle} />}
              header="Augink"
              text={Loren}
            />
          </li>
        </ul>

        <MiniText text="Gyvūnų prieglaudos:" />
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
    );
  }
}
