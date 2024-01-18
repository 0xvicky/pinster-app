import {useState} from "react";
import {Home, Auth} from "./container";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route
          path='/auth'
          element={<Auth />}
        />
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;
