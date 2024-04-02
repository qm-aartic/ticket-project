import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TicketBox from './TicketBox';
import PageBar from './PageBar';

function Tickets() {
    const [ticketView, setTicketView] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [tickets, setTickets] = useState([]);
    const maxBoxesInView = 5;

    //Generates tickets for testing
    useEffect(() => {
        let newTickets = [];
        for (let i = 0; i < 30; i++) {
            let ticketType = Math.floor(Math.random() * 3);
            switch(ticketType) {
                case 0:
                    ticketType = "Urgent EC";
                    break;
                case 1:
                    ticketType = "Standard EC";
                    break;
                case 2:
                    ticketType = "Issue";
                    break;
            }
            newTickets.push({id: i, name: "ECS404U - Sample Text", status: Math.random() > 0.5 ? "Pending" : "Not approved", type: ticketType, reviewedBy: "Name", feedback: "Lorem ipsum"})
        }
        setTickets(newTickets);
    }, [])

    //Handle ticket view change
    const handleTicketViewChange = (newTicketView) => {
        let newTickets = [];
        //All tickets
        if (ticketView === 0) {

        }
        //View ECs
        else if (ticketView === 1) {

        }
        //View issues
        else if (ticketView === 2) {

        }
        setTickets(newTickets);
        setPageNumber(1);
        setTicketView(newTicketView);
    }

    /* ----------------------------------------- */
    //Handle submit for searching
    const handleSearchingSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id = "tickets" className = "w-full h-[90vh] flex flex-col gap-8">
            <div className = "py-8 pl-8 pr-20 flex items-center gap-[20%] bg-white border-b-[1px] border-solid border-black">
                <h1 className = "text-[#0D3273] text-4xl font-bold"> Tickets </h1>  
                <div onClick = {() => handleTicketViewChange(0)}>
                    <h2 className = {"text-xl font-normal" + (ticketView === 0 ? " underline" : "")}> All tickets </h2>
                </div>
                <div onClick = {() => handleTicketViewChange(1)}>
                    <h2 className = {"text-xl font-normal" + (ticketView === 1 ? " underline" : "")}> View ECs </h2>
                </div>
                <div onClick = {() => handleTicketViewChange(2)}>
                    <h2 className = {"text-xl font-normal" + (ticketView === 2 ? " underline" : "")}> View Issues </h2>
                </div>
            </div>
            <div className = "flex flex-col self-center gap-8">
                <SearchBar searchTerm = {searchTerm} onSearchChange = {(e) => {setSearchTerm(e.target.value);}} handleSubmit = {handleSearchingSubmit}></SearchBar>
                <p className = "mb-4 text-xl font-normal text-right"> Page {pageNumber} of {Math.floor((tickets.length - 1)/maxBoxesInView) + 1} </p>
                <div className = "flex flex-col flex-wrap content-start gap-8">
                    {tickets.map(ticket => {
                        if (ticket.id < maxBoxesInView * pageNumber && ticket.id >= maxBoxesInView * (pageNumber - 1)) {
                            return <TicketBox ticketInfo = {ticket} isArchived = {false}></TicketBox>
                        }
                    })}
                </div>  
            </div>
            <PageBar pageNumber = {pageNumber} setPageNumber = {setPageNumber} maxPages = {Math.floor((tickets.length - 1)/maxBoxesInView) + 1}></PageBar>
        </div>
    );
}

export default Tickets;