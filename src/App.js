import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import LandingPage from "./LandingPage/LandingPage";
import PostView from './PostView/PostView.jsx';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/PostView' element={<PostView />} />
      <Route path='/' element={<LandingPage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
