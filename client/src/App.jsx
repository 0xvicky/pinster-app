import {useState} from "react";
import {Home, Auth} from "./container";
import {Navbar} from "./components";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <Routes>
          <Route
            path='/auth'
            element={<Auth />}
          />
          <Route
            path='/*'
            element={<Home />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
