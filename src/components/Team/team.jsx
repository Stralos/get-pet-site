import React, { PureComponent, Fragment } from 'react';
import Proptypes from 'prop-types';
import SectionHeader from 'src/components/common/molecules/SectionHeader';
import style from './team.module.scss';

const TeamMember = ({ name, description }) => (
  <li className={style.teamMember}>
    <div className={style.bubble} />
    <div className={style.name}>
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

export default class Team extends PureComponent {
  render() {
    return (
      <Fragment>
        <SectionHeader
          head="GET PET KOMANDA"
          subHead="Susipažinkite su GetPet komanda"
        />
        <ul className={style.teamMemberList} id="apie">
          <TeamMember name="Rūta" description={'VšĮ "Augink mane" vadovė, Mentorystės koordinaviams, Rinkodara, Teisė'} />
          <TeamMember name="Karolis" description="Programavimas, Projekto koordinavimas" />
          <TeamMember name="Beatričė" description="Programavimas, Soc. tinklų priežiūra" />
          <TeamMember name="Greta" description="Programavimas, Teisė, Fotografimas, Informacijos rengimas" />
          <TeamMember name="Asta" description="Dizainas, Informacijos rengimas" />
          <TeamMember name="Ana" description="Savanorių koordinavimas,Informacijos rengimas" />
          <TeamMember name="Kristina" description="Renginių koordinavimas,Soc. tinklų priežiūra,Informacijos rengimas" />
          <TeamMember name="Vaidas" description="Rinkodara, Ryšiai su visuomine" />
          <TeamMember name="Andrius" description="Rinkodara, Ryšiai su visuomine" />
          <TeamMember name="Tu" description="Laukiam tavęs prisijungiant!" />
        </ul>
      </Fragment>
    );
  }
}
