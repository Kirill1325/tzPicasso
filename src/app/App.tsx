import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import './styles.css'
import PostDetails from '../pages/PostDetails/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='wrapper'>
          <Routes>
            <Route path='/posts' element={<Home />} />
            <Route path='/posts/:id' element={<PostDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
