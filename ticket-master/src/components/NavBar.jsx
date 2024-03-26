import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const NavBar = () => {
  const [loggedUser, setLoggedUser] = useState("");
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setLoggedUser(user);
      //console.log(user);
    } catch (error) {}
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>

              {!loggedUser && (
                <>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </>
              )}

              {loggedUser && (
                <>
                  <NavLink className="nav-link" to="/newTicket">
                    Create Ticket
                  </NavLink>

                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                  {loggedUser.isAdmin && (
                    <NavLink className="nav-link" to="/users">
                      Users
                    </NavLink>
                  )}
                  <button type="button" className="btn btn-primary">
                    {loggedUser.name}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
