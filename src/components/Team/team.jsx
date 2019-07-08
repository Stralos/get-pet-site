import React from 'react';
import Proptypes from 'prop-types';
import SectionHeader from 'src/components/common/SectionHeader';
import SubHeader from 'src/components/common/SubHeader';
import style from './team.module.scss';

const TeamMember = ({ name, description }) => (
  <li className={style.teamMember}>
    <div className={style.bubble} />
    <div>
      {name}
    </div>
    <div className={style.description}>
      {description}
    </div>
  </li>
);
TeamMember.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};

export default class Team extends React.PureComponent {
  render() {
    return (
      <div>
        <SectionHeader head="GET PET KOMANDA" />
        <SubHeader head="Susipažinkite su GetPet komanda" />
        <ul className={style.teamMemberList} id="apie">
          <TeamMember name="Rūta" description={'VšĮ "Augink mane" vadovė, Mentorystės koordinaviams, Rinkodara, Teisė'} />
          <TeamMember name="Karolis" description="Programavimas, Projekto koordinavimas" />
          <TeamMember name="Beatričė" description="Programavimas, Soc. tinklų priežiūra" />
          <TeamMember name="Greta" description="Programavimas, Teisė, Fotografimas, Informacijos rengimas" />
          <TeamMember name="Asta" description="Dizainas, Informacijos rengimas" />

          <TeamMember name="Rūta" description={'VšĮ "Augink mane" vadovė, Mentorystės koordinaviams, Rinkodara, Teisė'} />
          <TeamMember name="Karolis" description="Programavimas, Projekto koordinavimas" />
          <TeamMember name="Beatričė" description="Programavimas, Soc. tinklų priežiūra" />
          <TeamMember name="Greta" description="Programavimas, Teisė, Fotografimas, Informacijos rengimas" />
          <TeamMember name="Asta" description="Dizainas, Informacijos rengimas" />
        </ul>
      </div>
    );
  }
}
