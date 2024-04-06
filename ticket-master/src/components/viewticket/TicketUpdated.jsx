import React from 'react';

const TicketCreated = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">

                <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
                <p className="text-gray-700">Your ticket has been successfully updated.</p>
                <p className="text-gray-700">An email confirmation will be sent to you shortly.</p>
                <p className="text-gray-700">You will receive updates via email regarding any changes made to your ticket.</p>
            </div>
        </div>
    );
};

export default TicketCreated;
