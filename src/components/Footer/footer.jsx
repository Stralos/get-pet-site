import React from 'react';
import style from './footer.module.css';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className={style.footer}>
        I am a footer
      </div>
    );
  }
}
