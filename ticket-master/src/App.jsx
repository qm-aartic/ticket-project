import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Logout from "./components/util/Logout";
import Header from "./components/header/Header";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import FAQ from "./components/faq/FAQ";
import SignUp from "./components/signup/SignUp";
import CreateTicket from './components/createticket/CreateTicket'; 
import TicketCreated from './components/createticket/TicketCreated';
import Services from "./components/service-status/Services";
import Tickets from "./components/legacy/Tickets";
import InputTicket from "./components/legacy/InputTicket";
import { Footer } from "./components/footer/Footer";

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
          {/* TESTING, DELETEME! */}
          <Route path='/tickets' element={<Tickets />} />
          <Route path='newTicket' element={<InputTicket />} />
          {/* //////////////////// */}
          <Route path='/create-ticket' element={<CreateTicket />} />
          <Route path='/ticket-created' element={<TicketCreated />} />

          <Route path='/services' element={<Services />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/logout" element={<Logout />} />
          {!loggedUser && (
          <Route path="/" element={<LandingPage />} />)}
          {loggedUser && (
          <Route path="/" element={<Dashboard />} />)}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
