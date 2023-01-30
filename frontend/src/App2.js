import React from 'react'
import App from './App';
import Eye from './Eye';
import Profile from './Profile';
import Extra from './Extra';
import People from './People';


//Straight From our router Lesson
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App2() {

      const h1Style = { 
    // display: 'inline-block', 
    // fontFamily: 'Great Vibes, cursive',
    // textAlign: 'center',
    fontSize: '40px',
    // fontWeight: 'bold',
    color: 'black'
      };
  return (
    <Router>
            <br /> 
            
      <div>
        {/* //Add Spacing in between these links */}
        <nav>
          <Link className='custom-link2'to='/'>HOME</Link>

          <Link className='custom-link2 container 'to='/App'>TASK MANAGEMENT</Link>
          
          <Link className='custom-link2'to='/Profile'>USER PROFILE</Link>
          
          <Link className='custom-link2'to='/Extra'>EXTRA</Link>

      <Routes>
      <Route path="/App" element={<App />} />
        <Route path="/" element={<Eye />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Extra" element={<Extra />} />

      </Routes>
      </nav>
      </div>
      
    </Router>
   
  );
}

export default App2;
