import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './SubHeader.module.scss';

export default class SubHeader extends React.PureComponent {
  render() {
    const { head, className } = this.props;
    return (
      <h4 className={classnames(style.subHeader, className)}>
        {head}
      </h4>
    );
  }
}
SubHeader.propTypes = {
  className: PropTypes.string,
  head: PropTypes.string.isRequired,
};
SubHeader.defaultProps = {
  className: null,
};
