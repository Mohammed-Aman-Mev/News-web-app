import About from "./Pages/WorldPolitics";
import Entertainment from "./Pages/Entertainment";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Sports from "./Pages/Sports";
import Weather from "./component/Weather";
import Crypto from "./component/Crypto";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/WorldPolitics" element={<About />} />

          <Route path="/Entertainment" element={<Entertainment />} />

          <Route path="/Sports" element={<Sports />} />
        </Routes>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            paddingLeft: "0px",
            paddingRight: "20px",
          }}
        >
          <Weather />
          <Crypto />
        </div>
      </div>
    </Router>
  );
};

export default App;
