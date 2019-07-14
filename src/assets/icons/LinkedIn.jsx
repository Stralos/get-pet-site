import React from 'react';
import Proptype from 'prop-types';

const LinkedIn = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.65 21.39">
    <g id="Layer_2" data-name="Layer 2">
      <g>
        <path d="M.34 6.5h4.07v14.9H.34zM2.37 4.79a2.4 2.4 0 0 1 0-4.79 2.37 2.37 0 0 1 2.37 2.39 2.38 2.38 0 0 1-2.37 2.4zM20.65 21.39h-4.07v-7.58c0-4.57-5.4-4.23-5.4 0v7.58H7.11V6.5h4.07v2.39c1.89-3.5 9.47-3.76 9.47 3.35z" />
      </g>
    </g>
  </svg>
);

LinkedIn.propTypes = {
  className: Proptype.string,
};

LinkedIn.defaultProps = {
  className: null,
};

export default LinkedIn;
