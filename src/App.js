import React from 'react';
import Submit from './Submit';
import Stores from './Stores'


function App() {

  return (
    <div className="App">
     <h2>Lit-Fit</h2>
     <section>
       <p>Submit your Lit-Fit below</p>
     </section>
     <Submit/>
     <Stores/>
    </div>
    
  );
}

export default App;
