import React from 'react';
import Proptype from 'prop-types';

const Intagram = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.54 17.53">
    <path d="M2.25 0h13a2.27 2.27 0 0 1 2.25 2.25v13a2.25 2.25 0 0 1-2.25 2.24h-13A2.24 2.24 0 0 1 0 15.29v-13A2.26 2.26 0 0 1 2.25 0zm10.52 2a.79.79 0 0 0-.78.8v1.82a.78.78 0 0 0 .78.79h2a.78.78 0 0 0 .79-.79V2.75a.79.79 0 0 0-.79-.8zm2.78 5.46H14a5.46 5.46 0 0 1 .22 1.51 5.38 5.38 0 0 1-5.46 5.29 5.38 5.38 0 0 1-5.43-5.34 5.46 5.46 0 0 1 .22-1.51H1.94v7.42a.71.71 0 0 0 .7.7h12.21a.7.7 0 0 0 .7-.7zM8.78 5.31a3.47 3.47 0 0 0-3.52 3.42 3.47 3.47 0 0 0 3.52 3.42 3.48 3.48 0 0 0 3.53-3.42 3.48 3.48 0 0 0-3.53-3.42z" data-name="Layer 2" />
  </svg>
);

Intagram.propTypes = {
  className: Proptype.string,
};

Intagram.defaultProps = {
  className: null,
};

export default Intagram;
