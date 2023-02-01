
import React from 'react';


const Eye = () => {

  const h1Style = { 
  display: 'inline-block', 
  fontFamily: 'Great Vibes, cursive',
  textAlign: 'center',
  fontSize: '70px',
  fontWeight: 'bold',
  marginleft: '120px'
  
};

  const divStyle = { display: 'inline-block' };
  return (
    <div className="eyeContainer">
      
      <br /><br /><br />
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
