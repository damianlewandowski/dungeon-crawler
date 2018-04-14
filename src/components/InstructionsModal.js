import React from 'react';
import Instructions from './Instructions';

export default ({ match, history }) => {
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
      onClick={back}
    >
      <div
        style={{
          position: "absolute",
          background: "#eee",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
          borderRadius: 4
        }}
      >
        <Instructions />
        <h2 style={{textAlign: "center", marginBottom: "3rem"}}>Good Luck!</h2>
      </div>
    </div>
  )
}