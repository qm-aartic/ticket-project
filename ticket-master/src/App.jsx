import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Tickets from "./components/Tickets";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import InputTicket from "./components/InputTicket";
import UpdateTicket from "./components/UpdateTicket";
import ReadTicket from "./components/ReadTicket";
import SearchTicket from "./components/SearchTicket";
import ViewUser from "./components/ViewUser";
import UpdateUser from "./components/UpdateUser";
import SearchUser from "./components/SearchUser";
import ResolvedTicket from "./components/ResolvedTicket";
import Users from "./components/Users";
import Service from "./components/Service";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/newTicket" element={<InputTicket />} />
          <Route path="/ticket/:id" element={<UpdateTicket />} />
          <Route path="/ticket/read/:id" element={<ReadTicket />} />
          <Route path="/ticket/search/:title" element={<SearchTicket />} />
          <Route path="/viewuser" element={<ViewUser />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/ticket/user/:name" element={<SearchUser />} />
          <Route path="/ticket/resolved" element={<ResolvedTicket />} />
          <Route path="/users" element={<Users />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
