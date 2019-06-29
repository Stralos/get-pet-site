import React from 'react';
import PropTypes from 'prop-types';
import style from './GetToKnow.module.scss';

export default class GetToKnow extends React.PureComponent {
  render() {
    const { icon, header, text } = this.props;
    return (
      <div>
        <div className={style.icon}>
          {icon}
        </div>
        <div className={style.header}>
          {header}
        </div>
        <div className={style.text}>
          {text}
        </div>
      </div>
    );
  }
}

GetToKnow.propTypes = {
  icon: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
