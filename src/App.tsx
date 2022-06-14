import { Route, Routes } from "react-router-dom";
import DemoLanding from "./landingPage/demoProfile";
import LandingPage from "./landingPage/landing-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<DemoLanding />} />
    </Routes>
  );
}

export default App;
