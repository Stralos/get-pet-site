import React from 'react';
import Proptype from 'prop-types';

const Logo = ({ className }) => (
  <svg height="20px" width="20px" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.94 81.3">
    <g id="Layer_2" data-name="Layer 2">
      <g>
        <path d="M0 56.88v-.14C0 43.25 10.51 32.2 24.9 32.2c8.54 0 13.69 2.3 18.64 6.5L37 46.63c-3.67-3-6.93-4.8-12.42-4.8-7.59 0-13.63 6.71-13.63 14.78v.13c0 8.69 6 15.06 14.38 15.06a16.63 16.63 0 0 0 9.8-2.8v-6.83H24.62L28 56.52l17.25-3.37v20.62A30.87 30.87 0 0 1 25 81.3c-14.83 0-25-10.38-25-24.42zm48.69 5.63v-.14c0-10.37 7.4-18.92 18-18.92 12.14 0 17.7 9.44 17.7 19.74 0 .81-.07 1.76-.14 2.71H58.94C60 70.58 63.21 73 67.82 73c3.46 0 6-1.09 8.82-3.73l5.9 5.23c-3.4 4.2-8.27 6.78-14.85 6.78-10.93.02-19-7.65-19-18.77zm25.64-3c-.61-4.62-3.32-7.73-7.66-7.73s-7.06 3.05-7.87 7.73zM112.72 33h19.39c11.33 0 18.18 6.72 18.18 16.41v.14c0 11-8.54 16.68-19.19 16.68h-7.93v14.25h-10.45zm18.72 24c5.21 0 8.27-3.12 8.27-7.19v-.13c0-4.69-3.26-7.2-8.48-7.2h-8.06V57zm19 5.56v-.14c0-10.37 7.39-18.92 18-18.92 12.13 0 17.7 9.44 17.7 19.74 0 .81-.07 1.76-.14 2.71h-25.31c1 4.68 4.27 7.12 8.88 7.12 3.45 0 6-1.09 8.82-3.73l5.9 5.23c-3.39 4.2-8.27 6.78-14.85 6.78-10.93-.05-18.99-7.72-18.99-18.84zm25.63-3c-.61-4.62-3.32-7.73-7.66-7.73s-7 3.05-7.87 7.73zm14.64 10.71V53h-4.33l-.19-4.54 4.81-1.23-.25-12.39H201v11.22l8.54-1.93V53H201v15.48c0 2.37 1 3.52 3.32 3.52a10.64 10.64 0 0 0 5.09-1.28V79a15.18 15.18 0 0 1-8.13 2.1c-6.28-.01-10.56-2.52-10.56-10.93zm-101.83 0V53h-4.34l-.17-4.54 4.76-1.18-.24-12.39h10.3v11.17l8.55-1.93V53h-8.55v15.48c0 2.37 1 3.52 3.33 3.52a10.7 10.7 0 0 0 5.09-1.28V79a15.24 15.24 0 0 1-8.14 2.1c-6.31-.01-10.58-2.52-10.58-10.93zM215.76 31.09c-1.41-2.8-6.19-1.52-6.19 1.61a5.24 5.24 0 0 0 .11 1c.87 3.45 4.3 4.42 5.43 5.45a1 1 0 0 0 .65.22 1 1 0 0 0 .65-.22c1.12-1 4.55-2 5.43-5.45a5.23 5.23 0 0 0 .1-1c0-3.13-4.78-4.41-6.18-1.61zM78 25a11.42 11.42 0 0 1 12 1.78 1.1 1.1 0 0 0 1.55-.09 1.09 1.09 0 0 0-.08-1.54A13.74 13.74 0 0 0 77.15 23a1.1 1.1 0 1 0 .85 2zM42.81 26.79a11.43 11.43 0 0 1 12-1.78 1.1 1.1 0 0 0 .88-2 13.73 13.73 0 0 0-14.39 2.16 1.1 1.1 0 0 0 1.47 1.63zM65.34 33.57V38a1.1 1.1 0 1 0 2.2 0v-4.43c1.81-.7 3.87-2.49 3.43-3.93-.24-.75-8.82-.75-9 0-.49 1.44 1.55 3.23 3.37 3.93z" />
        <path d="M110 22.91a1.52 1.52 0 0 1-.63-.14L66.44 3.19 23.55 22.77A1.52 1.52 0 0 1 22.29 20L65.81.14a1.46 1.46 0 0 1 1.26 0L110.6 20a1.53 1.53 0 0 1-.64 2.91z" />
        <path d="M86.82 11.65c1.93-1.85 3.83-3.24 7.37-3.23h.06a1.39 1.39 0 0 1 1.16 1.06 41.65 41.65 0 0 1 1 5.41c-2.41-.63-7.05-2.89-9.59-3.24zM46.06 11.65c-1.94-1.85-3.84-3.24-7.37-3.23h-.07a1.4 1.4 0 0 0-1.16 1.06 44.31 44.31 0 0 0-1 5.41c2.45-.63 7.06-2.89 9.6-3.24z" />
      </g>
    </g>
  </svg>
);

Logo.propTypes = {
  className: Proptype.string,
};

Logo.defaultProps = {
  className: null,
};

export default Logo;
