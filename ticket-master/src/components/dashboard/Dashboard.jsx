import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import SmallCard from "./SmallCard";
import { PiWarning } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import ProgressCard from "./ProgressCard";

const Dashboard = () => {

    const [loggedUser, setLoggedUser] = useState("");

    useEffect(() => {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            setLoggedUser(user);
        } catch (error) { }
    }, []);
    return (
        <section className='w-[100vw] flex flex-col items-center'>
            <section className='pt-10 flex gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl h-[80vh]">
                    <div className="card-body">
                        <h2 className="card-title text-4xl font-bold text-primary">Dashboard</h2>
                        <p className="capitalize mt-6 text-xl font-semibold text-gray-600">Welcome, {loggedUser.name}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-white">Create a ticket</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse gap-[10vh]">
                    <div className="flex-grow flex gap-6">
                        <SmallCard icon={<PiWarning size={80} color="#0d3273" />} title={"Issues"} value={2} />
                        <SmallCard icon={<CgNotes size={80} color="#0d3273" />} title={"EC"} value={2} />
                        <SmallCard icon={<IoTimerOutline size={80} color="#0d3273" />} title={"Urgent EC"} value={2} />
                        <SmallCard icon={<AiOutlineCalendar size={80} color="#0d3273" />} title={"Archived"} value={2} />
                    </div>
                    <div className="flex-grow flex gap-6">
                        <ProgressCard stage="Pending" type="EC" title="Unable to Submit Assessment"/>
                        <ProgressCard stage="Pending" type="Issue" title="Unenroled from all QMPlus modules..." />
                    </div>
                </div>
            </section>
        </section>
    );
};



export default Dashboard;