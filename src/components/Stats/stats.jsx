import React from 'react';
import Proptypes from 'prop-types';
import style from './stats.module.scss';

const Stat = ({ stat, text }) => (
  <li className={style.stat}>
    <div className={style.number}>
      {stat}
    </div>
    <div className={style.text}>
      {text}
    </div>
  </li>
);
Stat.propTypes = {
  stat: Proptypes.number.isRequired,
  text: Proptypes.string.isRequired,
};

export default class Stats extends React.PureComponent {
  render() {
    return (
      <ul id="apie" className={style.stats}>
        <Stat stat={1000} text="Parsisiuntimu" />
        <Stat stat={2019} text="Parsisiuntimu" />
        <Stat stat={777} text="Parsisiuntimu" />
        <Stat stat={999} text="Parsisiuntimu" />
      </ul>
    );
  }
}
