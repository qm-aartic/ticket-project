import React from 'react';
import ServiceCard from './ServiceCard';

function Services() {
    return (
        <section className="min-h-[80vh] py-16 xl:px-72 flex flex-col md:grid md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-primary">Service Status</h2>
                <h1 className="text-black font-bold text-4xl">Service Availability</h1>
                <p>Check the status of the services provided by Queen Mary University of London. If you are experiencing issues with any of the services listed below, please contact the IT Helpdesk.</p>
                <div className="divider"></div>
            </div>
            <div className='flex flex-col max-w-full max-h-[60vh] items-center overflow-auto gap-2 pb-12'>
                <ServiceCard name="QMPlus" available={true} />
                <ServiceCard name="MySIS" available={true} />
                <ServiceCard name="Queen Mary University of London Website" available={true} />
                <ServiceCard name="Hive Room Reservation Service" available={false} />
                <ServiceCard name="Library Online Services" available={true} />
                <ServiceCard name="Student Union Website" available={true} />
            </div>
        </section>

    );
}

export default Services;