import React from "react";
import {AddPin} from "../../components";
import {Routes, Route} from "react-router-dom";

const Home = () => {
  return (
    <Routes>
      <Route
        path='/addpin'
        element={<AddPin />}
      />
    </Routes>
  );
};

export default Home;
