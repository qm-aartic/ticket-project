// import React from 'react';

// function ViewTicket({status = "Approved", type = "Lab", reviewer = "No Reviewer Assigned", feedback = "No Feedback", category="Urgent", reason="Other", summary="this is a summary", affectedModules="ECS518U - Operating Systems", affectedAssessments="ECS518U: Lab 6", service="MySIS", service_category="technical", lab_category="power", fileattachment="None"}) {
//     return (
//         <div className="min-h-[88vh] bg-gray-100 flex flex-col justify-center items-center">
//             <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative w-full max-w-4xl"> 
//                 <h2 className="card-title font-light text-primary">
//                     {type} Ticket
//                 </h2>
//                 <br />
//                 <div className='flex flex-col items-left'>
//                     <h2 className="card-title font-light text-primary">
//                         Status:
//                     </h2>
//                     <p>{status}</p>
//                 </div>
//                 <div className='flex flex-col items-left'>
//                     <h2 className="card-title font-light text-primary">
//                         Type:
//                     </h2>
//                     <p className='capitalize'>{type}</p>
//                 </div>
//                 <div className='flex flex-col items-left'>
//                     <h2 className="card-title font-light text-primary text-left">
//                         Reviewed By:
//                     </h2>
//                     <p className='text-left'>{reviewer}</p>
//                 </div>
//                 <div className='flex flex-col items-left w-72'>
//                     <h2 className="card-title font-light text-primary text-left">
//                         Feedback:
//                     </h2>
//                     <p className='line-clamp-3 max-w-full'>{feedback}</p>
//                 </div>
//                 <br />
//                 {type === 'EC' && (
//                     <div className='flex flex-col items-left'>
//                         <h2 className="card-title font-light text-primary">
//                             Category:
//                         </h2>
//                         <p> {category} </p>

//                         <h2 className="card-title font-light text-primary">
//                             Reason:
//                         </h2>
//                         <p> {reason} </p>

//                         <h2 className="card-title font-light text-primary">
//                             Summary:
//                         </h2>
//                         <p> {summary} </p>

//                         <h2 className="card-title font-light text-primary">
//                             Affected Modules:
//                         </h2>
//                         <p> {affectedModules} </p>

//                         <h2 className="card-title font-light text-primary">
//                             Affected Assessments:
//                         </h2>
//                         <p> {affectedAssessments} </p>

//                         <h2 className='card-title font-light text-primary'>
//                             File attachments:
//                         </h2>
//                         <p> {fileattachment} </p>
                        
//                     </div>
//                 )}
//                 {type === 'Service' && (
//                     <div className='flex flex-col items-left'>
//                         <h2 className="card-title font-light text-primary">
//                             Service:
//                         </h2>
//                         <p> {service} </p>
//                         <h2 className="card-title font-light text-primary">
//                             Category:
//                         </h2>
//                         <p> {service_category} </p>
//                         <h2 className="card-title font-light text-primary">
//                             Summary:
//                         </h2>
//                         <p> {summary} </p>
//                         <h2 className='card-title font-light text-primary'>
//                             File attachments:
//                         </h2>
//                         <p> {fileattachment} </p>
                        
//                     </div>
//                 )}
//                 {type === 'Lab' && (
//                     <div className='flex flex-col items-left'>
//                         <h2 className="card-title font-light text-primary">
//                             Category:
//                         </h2>
//                         <p> {lab_category} </p>
//                         <h2 className="card-title font-light text-primary">
//                             Summary:
//                         </h2>
//                         <p> {summary} </p>
//                         <h2 className='card-title font-light text-primary'>
//                             File attachments:
//                         </h2>
//                         <p> {fileattachment} </p>
                        
//                     </div>
//                 )}
//             </div>
//         </div>

//     );
// }

// export default ViewTicket;





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ViewTicket() {
//     const { id } = useParams(); // Access the id parameter from the URL
    
//     console.log("ID:", id); // Log the id to check if it's correctly extracted
    
//         // Rest of the component code
      
//     const [ticket, setTicket] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch ticket details based on the id
//         axios.get(`http://localhost:3000/api/ticket/${id}`)
//             .then(response => {
//                 setTicket(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching ticket details:', error);
//                 setError('Error fetching ticket details');
//                 setLoading(false);
//             });
//     }, [id]); // Fetch ticket details whenever the id parameter changes

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!ticket) {
//         return <div>No ticket found</div>;
//     }
    
//     const formattedDate = new Date(ticket.date).toLocaleDateString('en-GB');

//     return (
//         <div className="min-h-[88vh] bg-gray-100 flex flex-col justify-center items-center">
//             <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative w-full max-w-4xl"> 
//                 <h2 className="card-title font-light text-primary">
//                     Ticket: {ticket.title}            
//                 </h2>
//                 <br />
//                 <div className='flex flex-col items-left'>
//                     <h2 className="card-title font-light text-primary">
//                         Description:
//                     </h2>
//                     <p>{ticket.desc}</p>
//                 </div>
//                 <div className='flex flex-col items-left'>
//                     <h2 className="card-title font-light text-primary">
//                         Status:
//                     </h2>
//                     <p className='capitalize'>{ticket.status}</p>
//                 </div>
//                 <div className='flex flex-col items-left'>
//                     <h2 className="card-title font-light text-primary text-left">
//                         Date:
//                     </h2>
//                     <p className='text-left'>{formattedDate}</p>
//                 </div>
//                 <div className='flex flex-col items-left w-72'>
//                     <h2 className="card-title font-light text-primary text-left">
//                         Files Attached:
//                     </h2>
//                     {ticket.fileName ? (
//                         <p className='line-clamp-3 max-w-full'>{ticket.fileName}</p>
//                     ) : (
//                         <p className='line-clamp-3 max-w-full'>No file attached</p>
//                     )}
//                 </div>
//                 <br />
//                 {/* ticket category is not null -> must be service or lab ticket*/}
//                 {ticket.category && (
//                     <div className='flex flex-col items-left'>
//                     {ticket.category && (
//                         <>
//                             <h2 className="card-title font-light text-primary">
//                                 Category:
//                             </h2>
//                             <p className='line-clamp-3 max-w-full'>{ticket.category}</p>
//                         </>
//                     )}
//                     {ticket.department && (
//                         <>
//                             <h2 className="card-title font-light text-primary">
//                                 Department:
//                             </h2>
//                             <p className='line-clamp-3 max-w-full'>{ticket.department.split(/(?=[A-Z])/).join(' ')}</p>
//                         </>
//                     )}
//                     {ticket.priority && (
//                         <>
//                             <h2 className="card-title font-light text-primary">
//                                 Priority:
//                             </h2>
//                             <p className='line-clamp-3 max-w-full'>{ticket.priority}</p>
//                         </>
//                     )}
//                     {ticket.adminComments && (
//                         <>
//                             <h2 className="card-title font-light text-primary">
//                                 Admin Comments:
//                             </h2>
//                             <p className='line-clamp-3 max-w-full'>{ticket.adminComments}</p>
//                         </>
//                     )}
//                     {ticket.reopenCount && (
//                         <>
//                             <h2 className="card-title font-light text-primary">
//                                 Reopen Count:
//                             </h2>
//                             <p className='line-clamp-3 max-w-full'>{ticket.reopenCount}</p>
//                         </>
//                     )}
//                     {/* Display message if all fields are empty */}
//                     {!ticket.category && !ticket.department && !ticket.priority && !ticket.adminComments && !ticket.reopenCount && (
//                         <p>No additional information available</p>
//                     )}
//                 </div>                
//                 )}
//                 {/* module is not null -> must be ec ticket */}
//                 {ticket.module && (
//                     <div className='flex flex-col items-left'>
//                         <h2 className="card-title font-light text-primary">
//                             EC Content goes here
//                         </h2>                        
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
    
// }

// export default ViewTicket;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { all } from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

const schema = z.object({
  title: z.string(),
  desc: z.string(),
  fileName: z.any().optional(),
  category: z.string().optional(),
  priority: z.any().optional(),
  status: z.any().optional(),
  adminComments: z.any().optional(),
});

const UpdateTicket = () => {
  const [loggedUser, setLoggedUser] = useState("");
  const [ticketUser, setTicketUser] = useState("");

  const onUpdate = (data) => {
    const originalTicket = { ...ticket };
    const { fileName, date, _id, __v, ...updatedTicket } = originalTicket;
    // console.log(updatedTicket);
    axios
      .put(`http://localhost:3000/api/ticket/${params.id}`, updatedTicket)
      .catch((err) => setTicket(originalTicket));
    // window.location = "/";
  };

  const sendEmail = (data) => {
    const originalTicket = { ...ticket };
    const { fileName, date, _id, __v, ...updatedTicket } = originalTicket;

    console.log(updatedTicket);

    const serviceId = "service_u2bvn5q";
    const templateId = "template_wv0j7d8";
    const publicKey = "6sWoVJwPyHfozi86y";

    axios
      .get(`http://localhost:3000/api/users/${updatedTicket.userId}`)
      .then((response) => {
        setTicketUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    const params = {
      ticket_type: updatedTicket.category,
      to_name: ticketUser.name,
      ticket_desc: updatedTicket.desc,
      user_email: ticketUser.email,
      ticket_result: updatedTicket.status,
    };

    emailjs
      .send(serviceId, templateId, params, publicKey)
      .then((response) => {
        console.log("Email sent succesfully!", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit =
    (...funcs) =>
    (event) => {
      event.preventDefault();
      funcs.forEach((func) => func(event));
    };

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setLoggedUser(user);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const params = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({ title: "", desc: "" });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/ticket/${params.id}`).then((res) => {
      console.log(res.data);
      setTicket(res.data);
    });
  }, [loggedUser]);

  console.log(ticket.category);

  const {
    register,
    // handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  // const onUpdate = (data) => {
  //   const originalTicket = { ...ticket };

  //   const { fileName, date, _id, __v, ...updatedTicket } = originalTicket;
  //   console.log(updatedTicket);
  //   axios
  //     .put(`http://localhost:3000/api/ticket/${params.id}`, updatedTicket)
  //     .catch((err) => setTicket(originalTicket));
  //   window.location = "/";
  // };
  return (
    <>
    <div className="min-h-[88vh] bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative w-full max-w-4xl">         
        <form onSubmit={handleSubmit(onUpdate, sendEmail)}>
          <div className="mb-3">
            <label htmlFor="title" className="card-title font-light text-primary">
              Title
            </label>
            <input
              id="title"
              {...register("title")}
              type="text"
              className="form-control"
              value={ticket.title}
              onChange={(event) =>
                setTicket({ ...ticket, title: event.target.value })
              }
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="desc" className="card-title font-light text-primary">
              Description
            </label>
            <input
              id="desc"
              {...register("desc")}
              type="text"
              className="form-control"
              value={ticket.desc}
              onChange={(event) =>
                setTicket({ ...ticket, desc: event.target.value })
              }
            />
            {errors.desc && (
              <p className="text-danger">{errors.desc.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="card-title font-light text-primary">
              Category
            </label>
            <input
              id="category"
              {...register("category")}
              type="text"
              disabled
              className="form-control"
              value={ticket.category}
              onChange={(event) =>
                setTicket({ ...ticket, category: event.target.value })
              }
            />
            {/* <select
              id="category"
              {...register("category")}
              className="form-select"
              value={ticket.category}
              onChange={(event) =>
                setTicket({ ...ticket, category: event.target.value })
              }
            > */}
            {/* <option value="EC">EC</option>
              <option value="ServiceIssue">Service Issue</option>
              <option value="LabIssue">Lab Issue</option> */}
            {/* </select> */}
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="card-title font-light text-primary">
              Ticket Priority
            </label>
            <select
              id="priority"
              {...register("priority")}
              className="form-select"
              value={ticket.priority}
              onChange={(event) =>
                setTicket({ ...ticket, priority: event.target.value })
              }
            >
              <option value="default">Default</option>
              <option value="high">High</option>
            </select>
          </div>

          {loggedUser.role !== "student" && (
            <>
              <div className="mb-3">
                <label htmlFor="status" className="card-title font-light text-primary">
                  Status
                </label>
                <select
                  id="status"
                  {...register("status")}
                  className="form-select"
                  value={ticket.status}
                  onChange={(event) =>
                    setTicket({ ...ticket, status: event.target.value })
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Review">In Review</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="adminComments" className="card-title font-light text-primary">
                  Comments
                </label>
                <input
                  id="adminComments"
                  type="text"
                  className="form-control"
                  {...register("adminComments")}
                  value={ticket.adminComments}
                  onChange={(event) =>
                    setTicket({ ...ticket, adminComments: event.target.value })
                  }
                />
              </div>
            </>
          )}

          <button
            onClick={() => navigate("/ticket-updated")}
            disabled={!isValid}
            className="btn btn-primary"
            type="submit"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/")}
            className="m-2 btn btn-secondary"
          >
            Home
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default UpdateTicket;


