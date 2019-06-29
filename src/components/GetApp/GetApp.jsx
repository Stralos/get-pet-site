import React from 'react';
import dogoLogo from 'src/assets/dogo.png';
import style from './GetApp.module.scss';

export default class GetApp extends React.PureComponent {
  render() {
    return (
      <div>
        <img className={style.image} src={dogoLogo} alt="pic" />
      </div>
    );
  }
}
