
import React from 'react';


const Eye = () => {

  const h1Style = { 
  display: 'inline-block', 
  fontFamily: 'Great Vibes, cursive',
  textAlign: 'center',
  fontSize: '70px',
  fontWeight: 'bold'
  
};

  const divStyle = { display: 'inline-block' };
  return (
    <div className="container6">
      
      <br /><br /><br />
    <h2></h2>
      <h1 style={h1Style}><p>Stay Focussed</p>Keep your Eye on the Prize</h1>

      <div className="eye-outer" style={divStyle}>
        <div className="eye-inner">
          <div className="inner-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
