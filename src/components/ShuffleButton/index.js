import React, {  Component } from 'react';

const ShuffleButton = (props) => (
  <div className="nav">
    <button onClick={props.reset}>Shuffle And Restart</button>
  </div>
);

export default ShuffleButton;
