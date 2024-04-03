import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import SmallCard from "./SmallCard";
import { PiWarning } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { IoTimerOutline } from "react-icons/io5";
import { FiArchive } from "react-icons/fi";
import ProgressCard from "./ProgressCard";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {

    const [tickets, setTickets] = useState([]);
    const [issues, setIssues] = useState([]);
    const [ec, setEc] = useState([]);
    const [urgentEc, setUrgentEc] = useState([]);
    const [archived, setArchived] = useState([]);
    const [loggedUser, setLoggedUser] = useState("");


    async function getTickets() {
        const { data } = await axios.get("http://localhost:3000/api/ticket");
        setTickets(data.filter((ticket) => ticket.status !== "Archived" && ticket.userId === loggedUser._id));
        setIssues(data.filter((ticket) => ticket.status !== "Archived" && ticket.category === "service" && ticket.userId === loggedUser._id));
        setEc(data.filter((ticket) => ticket.status !== "Archived" && ticket.category === "ec" && ticket.priority !== "high" && ticket.userId === loggedUser._id));
        setUrgentEc(data.filter((ticket) => ticket.status !== "Archived" && ticket.category === "ec" && ticket.priority === "high" && ticket.userId === loggedUser._id));
        setArchived(data.filter((ticket) => ticket.status === "Archived" && ticket.userId === loggedUser._id));
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
        <section className='flex items-center px-32 py-12 bg-base-200'>
            <div className="card bg-base-100 shadow-xl p-16">
                <div className="card-body grid grid-cols-2 grid-rows-2">
                    <div className='flex flex-col'>
                        <h2 className="card-title text-primary text-2xl">Dashboard</h2>
                        <div className='divider max-w-[80%]'></div>
                        <p className="text-gray-600">Welcome back, {loggedUser.name}!</p>
                        <a href='/create-ticket' className="btn btn-primary text-white max-w-[20%] mr-[20%]"> <FaPlus />New Ticket</a>
                    </div>
                    <div className='bg-base-200 py-6 px-16 rounded-xl flex flex-col gap-8'>
                        <h2 className="card-title text-primary text-xl font-black text-right self-end">OVERVIEW</h2>
                        <div className="grid grid-cols-7 gap-8 ">
                            <SmallCard title="Issues" value={issues.length} icon={<PiWarning size={40} color='#0d3273' />} />
                            <div className='divider divider-horizontal max-h-[80%] justify-self-center'></div>
                            <SmallCard title="EC" value={ec.length} icon={<CgNotes size={40} color='#0d3273' />} />
                            <div className='divider divider-horizontal max-h-[80%] justify-self-center'></div>
                            <SmallCard title="Urgent EC" value={urgentEc.length} icon={<IoTimerOutline size={40} color='#0d3273' />} />
                            <div className='divider divider-horizontal max-h-[80%] justify-self-center'></div>
                            <SmallCard title="Archived" value={archived.length} icon={<FiArchive size={40} color='#0d3273' />} />
                        </div>
                    </div>
                    <div className='py-6 rounded-xl flex flex-col gap-8 col-span-2'>
                        <h2 className="card-title text-primary text-right self-end text-xl font-black mr-16">PROGRESS</h2>
                        <div className="flex justify-end gap-10">
                            {tickets != null && tickets.length > 0 && tickets[0] != null && tickets[0].status != null ? <ProgressCard
                                stage={tickets[0].status}
                                title={tickets[0].title}
                                type={tickets[0].category === "service" ? "EC" : "Service"} /> : <div className='card bg-base-100 shadow-xl flex justify-between items-center'>
                                <div className='card-body cursor-pointer flex flex-row justify-between items-center gap-10 max-w-full'>
                                    <h2 className='card-title text-xl font-bold text-primary self-center line-clamp-4 '>Nothing to show here.</h2>
                                    <p>More information will be displayed when you create more tickets.</p>
                                    </div></div>
                            }

                            {tickets != null && tickets.length > 1 && tickets[1] != null && tickets[1].status != null && <ProgressCard
                                stage={tickets[1].status}
                                title={tickets[1].title}
                                type={tickets[1].category === "service" ? "EC" : "Service"}
                            />}
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default Dashboard;