import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import LandingPage from "./components/landing/LandingPage";

const App = () => {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
};

export default App;
