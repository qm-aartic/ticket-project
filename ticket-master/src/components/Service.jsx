import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import initializeService from "../../../npm-demo/functions/generateService";

function Service(initialized) {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    initializeService(() => navigate("/service"));
    axios
      .get("http://localhost:3000/api/service")
      .then((response) => {
        setServices(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    setLoggedUser(user);
    console.log(user);
  }, []);

  const toggleStatus = async (serviceId) => {
    try {
      const currentService = services.find(
        (service) => service._id === serviceId
      );
      const newStatus = !currentService.status;

      const response = await axios.put(
        `http://localhost:3000/api/service/${serviceId}`,
        {
          name: currentService.name,
          status: newStatus,
          faults: 0,
        }
      );
      console.log("Status updated successfully:", response.data);

      setServices((prevServices) =>
        prevServices.map((service) =>
          service._id === serviceId
            ? { ...service, status: newStatus }
            : service
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <h2>Services</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Faults</th>
            {loggedUser.role === "admin" && <th>Toggle Status</th>}
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>{service.status ? "Running" : "Not Running"}</td>
              <td>{service.faults}</td>
              {loggedUser.role === "admin" && (
                <td>
                  <button onClick={() => toggleStatus(service._id)}>
                    Change Status
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Service;
