import React from 'react';
import tick from '../../assets/tick.png';
import pending from '../../assets/pending.png';
import cross from '../../assets/cross.png';
import circleRightArrow from '../../assets/circle-chevron-right.png';

function TicketBox({ticketInfo, isArchived}) {
    let imgSrc = "";
    
    if (ticketInfo.status === "Approved") {
        imgSrc = tick;
    }
    else if (ticketInfo.status === "Pending") {
        imgSrc = pending;
    }
    else if (ticketInfo.status === "Not approved") {
        imgSrc = cross;
    }

    return (
        <div className = "ticket-outer-box flex flex-row items-center rounded-[50px] bg-white shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]">
            <div className = "h-full p-4 flex items-center rounded-[50px_0_0_50px] bg-[#145FB7]">
                <h2 className = "text-white text-xl font-medium"> {ticketInfo.name} </h2>
            </div>
            <div class = "p-8 flex flex-row gap-14 items-center">
                <img src = {imgSrc} alt = ""></img>
                <div className = "flex flex-col items-center gap-1.5">
                    <h3 className = "text-[#0D3273] text-xl font-medium"> Status: </h3>
                    <p className = "text-xl font-normal"> {ticketInfo.status} </p>
                </div>
                <div className = "flex flex-col items-center gap-1.5">
                    <h3 className = "text-[#0D3273] text-xl font-medium"> Type: </h3>
                    <p className = "text-xl font-normal"> {ticketInfo.type} </p>
                </div>
                {isArchived &&
                    <div className = "flex flex-col items-center gap-1.5">
                        <h3 className = "text-[#0D3273] text-xl font-medium"> Reviewed by: </h3>
                        <p className = "text-xl font-normal"> {ticketInfo.reviewedBy} </p>
                    </div>
                }
                {isArchived &&
                    <div className = "flex flex-row items-center gap-4">
                        <h3 className = "text-[#0D3273] text-xl font-medium"> Feedback: </h3>
                        <p className = "text-xl font-normal text-wrap"> {ticketInfo.feedback} </p>
                    </div>
                }
                <img src = {circleRightArrow} alt = ""></img>
            </div>            
        </div>
    );
}

export default TicketBox;