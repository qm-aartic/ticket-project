import React from 'react';
import Ticket from '../Ticket';
import DisplayHeader from '../DisplayHeader';

function Archive() {
    return (
        <>
            <DisplayHeader isArchive={true} />
            <section className='min-h-screen py-10 px-40 flex flex-col gap-10'>
                <Ticket 
                title='Here is an example overflow look!'
                feedback='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consequatur nisi debitis saepe temporibus amet quidem quasi eaque placeat voluptatem.'/>
                <Ticket />
                <Ticket />
            </section>
        </>
            );
}

export default Archive;