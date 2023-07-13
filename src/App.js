import React from 'react';
import Tooltip from './Tooltip';
import './style.css';


const App = () => {
  return (
    <div>
      
      <Tooltip text="Thanks for hovering ! I'm a tooltip">
        <span className='tooltip'>hover over me!</span>
      </Tooltip>
    </div>
  );
};



export default App;
