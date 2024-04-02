import { WelcomeCard } from './WelcomeCard';
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import SmallCard from "./SmallCard";
import { PiWarning } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import ProgressCard from "./ProgressCard";
import axios from "axios";
import { get } from 'lodash';

const Dashboard = () => {

    const [tickets, setTickets] = useState([]);
    const [issues, setIssues] = useState([]);
    const [ec, setEc] = useState([]);
    const [urgentEc, setUrgentEc] = useState([]);
    const [archived, setArchived] = useState([]);
    const [loggedUser, setLoggedUser] = useState("");


    async function getTickets() {
        const { data } = await axios.get("http://localhost:3000/api/ticket");
        setTickets(data.filter((ticket) => ticket.userId === loggedUser._id));
        setIssues(data.filter((ticket) => ticket.status !== "archived" && ticket.category === "service" && ticket.userId === loggedUser._id));
        setEc(data.filter((ticket) => ticket.status !== "archived" && ticket.category === "ec"  && ticket.priority !== "high" && ticket.userId === loggedUser._id));
        setUrgentEc(data.filter((ticket) => ticket.status !== "archived" && ticket.category === "ec" && ticket.priority === "high" && ticket.userId === loggedUser._id));
        setArchived(data.filter((ticket) => ticket.status === "archived" && ticket.userId === loggedUser._id));
    }

    //TODO: Ensure responsiveness
    useEffect(() => {
        if (loggedUser) {
            getTickets();
        }
    }, [loggedUser]);

    useEffect(() => {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            setLoggedUser(user);
        } catch (error) { }
    }, []);

    return (
        <section className='w-[100vw] flex items-center px-64 py-16 max-h-screen '>
            <WelcomeCard loggedUser={loggedUser} />
            <div className='flex flex-col gap-16 flex-wrap w-full'>
                <div className='flex justify-evenly'>
                    <SmallCard title='Issues' value={issues.length} icon={<CgNotes size={40} color='#0d3273' />} />
                    <SmallCard title='Standard EC' value={ec.length} icon={<IoTimerOutline size={40} color='#0d3273' />} />
                    <SmallCard title='Urgent EC' value={urgentEc.length} icon={<PiWarning size={40} color='#0d3273' />} />
                    <SmallCard title='Archived' value={0} icon={<AiOutlineCalendar size={40} color='#0d3273' />} />
                </div>
                <div className='flex justify-evenly w-full'>
                    {tickets != null && tickets.length > 0 && tickets[0] != null && tickets[0].status != null && <ProgressCard 
                    stage={tickets[0].status}
                    title={tickets[0].title}
                    type={tickets[0].category === "service" ? "EC" : "Service"}
                    />}
                    
                    {tickets != null && tickets.length > 1 && tickets[1] != null && tickets[1].status != null && <ProgressCard 
                    stage={tickets[1].status}
                    title={tickets[1].title}
                    type={tickets[1].category === "service" ? "EC" : "Service"}
                    />}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;