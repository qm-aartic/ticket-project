import React from "react";
import { FaPlus } from "react-icons/fa";


export function WelcomeCard({loggedUser}) {
    return <div className="card bg-base-100 shadow-xl h-[67vh]">
        <div className="card-body max-w-full">
            <h2 className="card-title text-2xl font-bold text-primary text-nowrap">QMUL Dashboard</h2>
            <p className="capitalize mt-6 text-lg font-semibold text-gray-600">Welcome, {loggedUser.name}</p>
            <div className="card-actions justify-end">
                <a href='/create-ticket' className="btn btn-primary text-white"> <FaPlus />New Ticket</a>
            </div>
        </div>
    </div>;
}
