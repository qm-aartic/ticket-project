import Ticket from '../Ticket';
import DisplayHeader from '../DisplayHeader';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState, useContext } from 'react'
import { FilterContext } from '../FilterContextProvider';
import { SearchContext } from '../FilterContextProvider';

function Tickets() {

    const { filter, setFilter } = useContext(FilterContext);
    const { search, setSearch } = useContext(SearchContext);
    const [tickets, setTickets] = useState([]);
    const [loggedUser, setLoggedUser] = useState("");

    async function getTickets() {
        const { data } = await axios.get("http://localhost:3000/api/ticket");
        setTickets(data.filter((ticket) => ticket.status !== "Archived" && ticket.userId === loggedUser._id && ticket.title.toLowerCase().includes(search.toLowerCase())));
        if (filter === "View Issues") {
            setTickets(data.filter((ticket) => ticket.status !== "Archived" && 
            (ticket.category === "service" || ticket.category === "Building Hazard" || 
         ticket.category === "Power" || ticket.category === "Other" || ticket.category === "Hardware"
         || ticket.category === "technical" || ticket.category === "functional" || ticket.category === "accessibility") 
             && ticket.userId === loggedUser._id && ticket.title.toLowerCase().includes(search.toLowerCase())));
        } else if (filter === "View EC") {
            setTickets(data.filter((ticket) => ticket.status !== "Archived" && ticket.category === "ec" && ticket.userId === loggedUser._id && ticket.title.toLowerCase().includes(search.toLowerCase())));
        }
        console.log(search);
    }

    //TODO: Ensure responsiveness
    useEffect(() => {
        if (loggedUser) {
            getTickets();
        }
    }, [loggedUser, filter, search]);

    useEffect(() => {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            setLoggedUser(user);
        } catch (error) { }
    }, []);

    return (
        <>
            <DisplayHeader isArchive={false} />
            <section className='min-h-[80vh] py-10 px-40 flex flex-col gap-10'>
                {tickets.length <= 0 && <h1 className="text-center text-2xl text-gray-500">No tickets found</h1>}
                {tickets.map((ticket) => (
                    <Ticket
                    key={ticket._id} // Add a key prop for optimization
                    id={ticket._id} // Pass the id as a prop
                        title={ticket.title}
                        status={ticket.status}
                        type={ticket.category}
                        feedback={ticket.feedback}
                    />
                ))}
            </section>
        </>
    );
}

export default Tickets;