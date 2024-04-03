import React from 'react';
import { FaChevronRight } from "react-icons/fa";

function Ticket({title="No Title Provided", status = "Approved", type = "EC", reviewer = "No Reviewer Assigned", feedback = "No Feedback" }) {
    return (
        <div className="card bg-base-100 shadow-xl h-40">
            <div className="flex justify-between items-start p-0 min-h-full">
                <div className="max-w-80 card-body cursor-pointer flex flex-row justify-between items-center min-h-full gap-10 bg-primary rounded-[1rem_0_0_1rem]">
                    <h2 className='card-title text-xl font-bold text-center text-white self-center line-clamp-3'>{title}</h2>
                </div>
                <div className="card-body flex-row max-w-full justify-evenly py-8">
                    <div className='flex flex-col items-center'>
                        <h2 className="card-title font-light text-primary">
                            Status:
                        </h2>
                        <p>{status}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className="card-title font-light text-primary">
                            Type:
                        </h2>
                        <p className='capitalize'>{type}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className="card-title font-light text-primary text-center">
                            Reviewed By:
                        </h2>
                        <p className='text-center'>{reviewer}</p>
                    </div>
                    <div className='flex flex-col items-center w-72'>
                        <h2 className="card-title font-light text-primary text-center">
                            Feedback:
                        </h2>
                        <p className='line-clamp-3 max-w-full' >{feedback}</p>
                    </div>
                </div>
                <div className="card-actions justify-end justify-self-end self-center pr-10">
                        <button className="btn btn-circle btn-outline btn-primary">
                            <FaChevronRight />
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default Ticket;