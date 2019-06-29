import React from 'react';
import PropTypes from 'prop-types';
// import style from './GetToKnow.module.scss';

export default class GetToKnow extends React.PureComponent {
  render() {
    const { icon, header, text } = this.props;
    return (
      <div>
        <div>
          {icon}
        </div>
        <div>
          {header}
        </div>
        <div>
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
