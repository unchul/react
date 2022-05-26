import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";


function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/detail/:week_day" element={<Detail />}></Route>

      </Routes>

    </div>
  );
}




export default App;