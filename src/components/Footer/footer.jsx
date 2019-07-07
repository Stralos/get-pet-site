import React from 'react';
import Proptypes from 'prop-types';
import style from './footer.module.scss';

const Section = ({ head, content }) => (
  <div className={style.section}>
    <h4 className={style.sectionHead}>
      {head}
    </h4>
    <div className={style.content}>
      {content}
    </div>
  </div>
);
Section.propTypes = {
  head: Proptypes.string.isRequired,
  content: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.element,
  ]).isRequired,
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={style.footer}>
        <Section head="APIE GETPET" content={text} />
        <Section head="KONTAKTAI" content="labas@getpet.lt" />
        <Section head="SOCIALINIAI TINKLAI" content="GetPet rasite:" />
      </footer>
    );
  }
}
