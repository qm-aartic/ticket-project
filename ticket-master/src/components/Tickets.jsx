import React, { useEffect, useState } from "react";
import axios from "axios";
// import ViewTicketInfo from "./ViewTicketInfo";
import NavBar from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [viewInfo, setViewInfo] = useState(false);
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState("");
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setLoggedUser(user);
      // console.log(user);
    } catch (error) {}
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ticket")
      .then((res) => setTickets(res.data));
  }, []);

  const handleDelete = (item) => {
    const originalTicket = [...tickets];
    setTickets(tickets.filter((ticket) => ticket._id !== item._id));
    console.log("original ticket " + tickets);

    axios
      .delete(`http://localhost:3000/api/ticket/${item._id}`)
      .catch((err) => setTickets(...originalTicket));
  };

  return (
    <div>
      <NavBar />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Owner</th>
            <th scope="col">Evidence</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.title}>
              <td>{ticket.type}</td>
              <td>
                <Link to={`/ticket/${ticket._id}`}> {ticket.title}</Link>
              </td>
              <td>{ticket.desc}</td>
              <td>{ticket.userName}</td>
              <td>
                {ticket.fileName && (
                  <a href={ticket.fileName} target="_blank">
                    Evidence Here
                  </a>
                )}
              </td>
              <td>{ticket.status}</td>

              {loggedUser.isAdmin || ticket.status === "Pending" ? (
                <td>
                  <button
                    onClick={() => navigate(`/ticket/${ticket._id}`)}
                    className="btn btn-success btn-sm"
                  >
                    Update
                  </button>
                </td>
              ) : (
                <td></td>
              )}

              {!loggedUser.isAdmin && (
                <td>
                  <button
                    onClick={() => handleDelete(ticket)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;
