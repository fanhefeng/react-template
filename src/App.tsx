import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Buffer } from "buffer";
import { ApiProvider } from "./providers/Api";

window.Buffer = Buffer;

export const App = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
};
