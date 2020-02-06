import React from 'react';
import Tweet from './Tweet';
// one component 
function App() {


  return (


    <div >
      <div className="header">
        <h1>Once upon a time..</h1>
      </div>
      <div className='app'>

        <Tweet name='Yes' messages='starting from yes' />
        <Tweet name='No' messages='and get a big no' />
        <Tweet name='Ngoh' messages="wait a minute... it's actually 'Ngoh'" />
        <Tweet name='Clarence' messages="just realize it's Clarence Ngoh" />
        <Tweet name='Feedback' messages="What a great pun!" />
      </div>

    </div>

  );



}

export default App;