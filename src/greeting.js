import React from 'react';

function Hello() {

    const greeting = () => {
        console.log('hello')
    };
    return (
        <div>
            <h1>This is hello component</h1>
            <button onClick={greeting} >Sayhello</button>
        </div>
    )
}

export default Hello;
/*
 return (
    // React.createElement(div)
    // document.querySelector('.greet') addListener...
    <div>
      <h1> Hello </h1>
      <button onClick={// js in herer with {}
        greeting()
      }>greet</button>
    </div>

  );
  */