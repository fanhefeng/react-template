import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Buffer } from "buffer";
import { Suspense } from "react";
import Transition from "./pages/Transition";
import Routing, { NotFound } from "./Routing";

window.Buffer = Buffer;

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Transition />}>
        <Routes>
          {Routing.map(({ path, element, props }) => (
            <Route path={path} element={element} {...props} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
