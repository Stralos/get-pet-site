import React from 'react';
import PropTypes from 'prop-types';
import style from './SubHeader.module.scss';

export default class SubHeader extends React.PureComponent {
  render() {
    const { head } = this.props;
    return (
      <h4 className={style.subHeader}>
        {head}
      </h4>
    );
  }
}
SubHeader.propTypes = {
  head: PropTypes.string.isRequired,
};
