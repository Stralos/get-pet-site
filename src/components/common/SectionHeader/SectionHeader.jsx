import React from 'react';
import PropTypes from 'prop-types';
import style from './SectionHeader.module.scss';

export default class SectionHeader extends React.PureComponent {
  render() {
    const { head } = this.props;
    return (
      <h2 className={style.header}>
        {head}
      </h2>
    );
  }
}
SectionHeader.propTypes = {
  head: PropTypes.string.isRequired,
};
