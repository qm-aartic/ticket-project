import React from 'react';

const ProgressCard = ({stage="Pending", type="EC", title="Loading..."}) => {

    let color = "text-blue-300";
    if(type === "EC") {
        color = "text-green-400";
    }

    let percentage = "100";
    switch(stage) {
        case "Pending":
            percentage = "25";
            break;
        case "Completed":
            percentage = "100";
            break;
        case "In Progress":
            percentage = "75";
            break;
        case "Rejected":
            color = "text-red-500";
            percentage = "100";
            break;

    }

    return (
        <div className='card bg-base-100 shadow-xl flex justify-between items-center'>
            <div className='card-body cursor-pointer flex flex-row justify-between items-center gap-10'>
                <div className={`radial-progress ${color}`} style={{ "--value": percentage, "--size": "10rem", "--thickness": "10px" }} role="progressbar">
                    <h3 className="text-xl font-bold text-primary text-center self-center">Status:</h3>
                    <p className="text-md font-semibold text-center text-gray-500 self-center">{stage}</p>
                </div>
                <div>
                    <h2 className='card-title text-xl font-bold text-primary self-center line-clamp-4 max-w-20'>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;