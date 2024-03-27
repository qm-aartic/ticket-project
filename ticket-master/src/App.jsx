import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Logout from "./components/util/Logout";
import Header from "./components/header/Header";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import FAQ from "./components/faq/FAQ";

const App = () => {
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setLoggedUser(user);
    } catch (error) {}
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/logout" element={<Logout />} />
          {!loggedUser && (
          <Route path="/" element={<LandingPage />} />)}
          {loggedUser && (
          <Route path="/" element={<Dashboard />} />)}
        </Routes>
      </Router>
    </>
  );
};

export default App;
