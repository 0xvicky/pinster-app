import React from "react";
import {AddPin} from "../../components";
import {Routes, Route} from "react-router-dom";

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen border-t-4'>
      <Routes>
        <Route
          path='/addpin'
          element={<AddPin />}
        />
      </Routes>
    </div>
  );
};

export default Home;
