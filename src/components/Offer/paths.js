import React from "react";
import { Routes, Route } from "react-router-dom";
import Implantologia from "./Pages/Implantologia"; // Import nowej podstrony

const App = () => {
  return (
    <Routes>
      <Route path="/implantologia" element={<Implantologia />} />
    </Routes>
  );
};

export default App;
