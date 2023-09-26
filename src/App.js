import Header from "./layout/Header";
import Foter from "./layout/Foter";
import FirstPage from "./pages/Firstpage";
import { useState } from 'react';
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";


function App() {

  let [s, sets] = useState(0);
  function mylang(s) {
    sets(s);
  }

  let [j, setj] = useState(0);
  function witch(j) {
    setj(j);
  }


  return (
    <div >
      <Header witch={witch}  mylang={mylang} lan={s} />
      <Routes>
        <Route path="/" element={<FirstPage sw={j} lan={s}/>} />
      </Routes>
      <Foter/>
     
    </div>
  );
}

export default App;
