import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './MiniText.module.scss';

export default class MiniText extends PureComponent {
  render() {
    const { text, className } = this.props;
    return (
      <h4 className={classnames(style.text, className)}>
        {text}
      </h4>
    );
  }
}
MiniText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
MiniText.defaultProps = {
  className: null,
};
