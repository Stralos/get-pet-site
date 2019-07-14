import React, { PureComponent, Fragment } from 'react';
import Proptypes from 'prop-types';
import SectionHeader from 'src/components/common/molecules/SectionHeader';
import style from './team.module.scss';

const TeamMember = ({ name, description, showPic }) => (
  <li className={style.teamMember}>
    {showPic && (
      <div className={style.bubble} />
    )}
    <div className={style.name}>
      {name}
    </div>
    <div className={style.description}>
      {description}
    </div>
  </li>
);
TeamMember.propTypes = {
  showPic: Proptypes.bool,
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};
TeamMember.defaultProps = {
  showPic: true,
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
        <h4 className={style.volunteers}> GET PET SAVANORIAI </h4>
        <ul className={style.teamMemberList}>
          <TeamMember showPic={false} name="Evelina" description="Fotografija" />
          <TeamMember showPic={false} name="Aistė" description="Fotografija" />
        </ul>
      </Fragment>
    );
  }
}
