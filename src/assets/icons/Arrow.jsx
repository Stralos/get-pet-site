import React from 'react';
import Proptype from 'prop-types';

const Arrow = ({ className }) => (
  <svg
    className={className}
    height="15px"
    width="20px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20.24 14.45"
  >
    <path d="M10.12 7.23l-5.06 7.22H0L10.12 0l10.12 14.45h-5.06l-5.06-7.22z" />
  </svg>
);

Arrow.propTypes = {
  className: Proptype.string,
};

Arrow.defaultProps = {
  className: null,
};

export default Arrow;
