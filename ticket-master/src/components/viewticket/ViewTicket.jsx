import React from 'react';

function ViewTicket({status = "Approved", type = "Lab", reviewer = "No Reviewer Assigned", feedback = "No Feedback", category="Urgent", reason="Other", summary="this is a summary", affectedModules="ECS518U - Operating Systems", affectedAssessments="ECS518U: Lab 6", service="MySIS", service_category="technical", lab_category="power", fileattachment="None"}) {
    return (
        <div className="min-h-[88vh] bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative w-full max-w-4xl"> 
                <h2 className="card-title font-light text-primary">
                    {type} Ticket
                </h2>
                <br />
                <div className='flex flex-col items-left'>
                    <h2 className="card-title font-light text-primary">
                        Status:
                    </h2>
                    <p>{status}</p>
                </div>
                <div className='flex flex-col items-left'>
                    <h2 className="card-title font-light text-primary">
                        Type:
                    </h2>
                    <p className='capitalize'>{type}</p>
                </div>
                <div className='flex flex-col items-left'>
                    <h2 className="card-title font-light text-primary text-left">
                        Reviewed By:
                    </h2>
                    <p className='text-left'>{reviewer}</p>
                </div>
                <div className='flex flex-col items-left w-72'>
                    <h2 className="card-title font-light text-primary text-left">
                        Feedback:
                    </h2>
                    <p className='line-clamp-3 max-w-full'>{feedback}</p>
                </div>
                <br />
                {type === 'EC' && (
                    <div className='flex flex-col items-left'>
                        <h2 className="card-title font-light text-primary">
                            Category:
                        </h2>
                        <p> {category} </p>

                        <h2 className="card-title font-light text-primary">
                            Reason:
                        </h2>
                        <p> {reason} </p>

                        <h2 className="card-title font-light text-primary">
                            Summary:
                        </h2>
                        <p> {summary} </p>

                        <h2 className="card-title font-light text-primary">
                            Affected Modules:
                        </h2>
                        <p> {affectedModules} </p>

                        <h2 className="card-title font-light text-primary">
                            Affected Assessments:
                        </h2>
                        <p> {affectedAssessments} </p>

                        <h2 className='card-title font-light text-primary'>
                            File attachments:
                        </h2>
                        <p> {fileattachment} </p>
                        
                    </div>
                )}
                {type === 'Service' && (
                    <div className='flex flex-col items-left'>
                        <h2 className="card-title font-light text-primary">
                            Service:
                        </h2>
                        <p> {service} </p>
                        <h2 className="card-title font-light text-primary">
                            Category:
                        </h2>
                        <p> {service_category} </p>
                        <h2 className="card-title font-light text-primary">
                            Summary:
                        </h2>
                        <p> {summary} </p>
                        <h2 className='card-title font-light text-primary'>
                            File attachments:
                        </h2>
                        <p> {fileattachment} </p>
                        
                    </div>
                )}
                {type === 'Lab' && (
                    <div className='flex flex-col items-left'>
                        <h2 className="card-title font-light text-primary">
                            Category:
                        </h2>
                        <p> {lab_category} </p>
                        <h2 className="card-title font-light text-primary">
                            Summary:
                        </h2>
                        <p> {summary} </p>
                        <h2 className='card-title font-light text-primary'>
                            File attachments:
                        </h2>
                        <p> {fileattachment} </p>
                        
                    </div>
                )}
            </div>
        </div>

    );
}

export default ViewTicket;


