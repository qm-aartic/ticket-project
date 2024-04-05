import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ServiceCard from './ServiceCard';
import initializeService from "../../../../npm-demo/functions/generateService";


function Services() {

    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [loggedUser, setLoggedUser] = useState("");

    useEffect(() => {
        initializeService(() => navigate("/services"));
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
    }

    return (
        <section className="min-h-[80vh] py-16 xl:px-72 flex flex-col md:grid md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-primary">Service Status</h2>
                <h1 className="text-black font-bold text-4xl">Service Availability</h1>
                <p>Check the status of the services provided by Queen Mary University of London. If you are experiencing issues with any of the services listed below, please contact the IT Helpdesk.</p>
                <div className="divider"></div>
            </div>
            <div className='flex flex-col max-w-full max-h-[60vh] items-center overflow-auto gap-2 pb-12'>
            {services.map((service) => (
                <>
                <ServiceCard
                key={service._id}
                name={service.name}
                available={service.status}
                />
                {loggedUser != null && loggedUser.role === "admin" && (
                    <div className="flex gap-4">
                    <input type="checkbox" className="toggle" checked={service.status} onClick={() => toggleStatus(service._id)} />
                    <p>Toggle Status</p>
                    </div>
                  )}
                </>
                ))}
            </div>
        </section>

    );
}

export default Services;