import React from "react";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Buffer } from "buffer";

window.Buffer = Buffer;

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
<<<<<<< HEAD
      </BrowserRouter>
  )
}
=======
    </BrowserRouter>
  );
};
>>>>>>> 9e7cdfcea200d8044898da348d966d2fce8e6f33
