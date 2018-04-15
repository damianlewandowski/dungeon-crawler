import React from 'react';
import PropTypes from 'prop-types';

const Bar = ({ val, foreground, background, styles }) => (
  <div
    style={{
      width: "100%",
      height: "5px",
      background: background,
      position: "relative",
      margin: "0 auto",
      ...styles
    }}
  >

    <div
      style={{
        height: "5px",
        width: `${val}%`,
        background: foreground,
        position: "absolute",
        top: 0,
        left: 0
      }}
    />

  </div>
)

Bar.propTypes = {
  val: PropTypes.number.isRequired,
  foreground: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export default Bar;