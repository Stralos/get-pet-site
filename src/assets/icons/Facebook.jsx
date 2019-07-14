import React from 'react';
import Proptype from 'prop-types';

const Facebook = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.26 21.69">
    <path d="M10.62 11.8l.5-3.8H7.31V5.47c0-1.11.3-1.86 1.92-1.86h2V.15C10.91.12 9.7 0 8.29 0c-3 0-5 1.8-5 5.09V8H0v3.8h3.33v9.89h4V11.8z" data-name="Layer 2" />
  </svg>
);

Facebook.propTypes = {
  className: Proptype.string,
};

Facebook.defaultProps = {
  className: null,
};

export default Facebook;
