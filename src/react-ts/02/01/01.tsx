import React from 'react';

function handleClick() {
    let bodyStyle: CSSStyleDeclaration  = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

export default function LightSwitch(): React.ReactElement {
    return (
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    );
  }
  