import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './BigText.module.scss';

export default class BigText extends PureComponent {
  render() {
    const { text, className } = this.props;
    return (
      <h2 className={classnames(style.header, className)}>
        {text}
      </h2>
    );
  }
}
BigText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
BigText.defaultProps = {
  className: null,
};
