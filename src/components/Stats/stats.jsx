import React from 'react';
import style from './stats.module.scss';

export default class Stats extends React.PureComponent {
  render() {
    return (
      <div id="apie" className={style.stats}>
        I am stats
      </div>
    );
  }
}
