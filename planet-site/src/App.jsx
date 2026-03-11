import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Mercury from "./Page/Mercury";
import Venus from "./Page/Venus";
import Earth from "./Page/Earth";
import Mars from "./Page/Mars";
import Jupiter from "./Page/Jupiter";
import Saturn from "./Page/Saturn";
import Uranus from "./Page/Uranus";
import Neptune from "./Page/Neptune";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<Navigate to="/mercury" replace />} />

        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />

        <Route path="*" element={<Navigate to="/mercury" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;