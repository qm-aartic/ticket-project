import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { all } from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from '@emailjs/browser';
import NavBar from "./NavBar";

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
      setTicket(res.data);
    });
  }, [loggedUser]);

  // console.log(allTickets);

  const {
    register,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const handleSubmit = (...funcs) => (event) => {
    event.preventDefault();
    funcs.forEach(func => func(event));
  };
  
  const onUpdate = (data) => {
    const originalTicket = { ...ticket };
    const { fileName, date, _id, __v, ...updatedTicket } = originalTicket;
    axios
      .put(`http://localhost:3000/api/ticket/${params.id}`, updatedTicket)
      .catch((err) => setTicket(originalTicket));
  };
  
  const sendEmail = async (data) => {
    const originalTicket = { ...ticket };
    const { fileName, date, _id, __v, ...updatedTicket } = originalTicket;
    
    const serviceId = 'service_9re6h25';
    const templateId = 'template_wv0j7d8';
    const publicKey ='6sWoVJwPyHfozi86y';

    try {
        const response = await axios.get(`http://localhost:3000/api/users/${updatedTicket.userId}`);
        const ticketUser = response.data;
        setTicketUser(ticketUser);
        console.log(ticketUser);

        const params = {
            ticket_type: updatedTicket.category,
            to_name: ticketUser.name,
            ticket_desc: updatedTicket.desc,
            user_email: ticketUser.email,
            ticket_result: updatedTicket.status,
        };

        await emailjs.send(serviceId, templateId, params, publicKey);
        console.log('Email sent successfully!');
        window.location = "/";
    } catch (error) {
        console.error('Error sending email:', error); 
        window.location = "/";
    }
};

  return (
    <>
      <div className="container justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onUpdate, sendEmail)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
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
            <label htmlFor="desc" className="form-label">
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
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              {...register("category")}
              className="form-select"
              value={ticket.category}
              onChange={(event) =>
                setTicket({ ...ticket, category: event.target.value })
              }
            >
              <option value="ServiceIssue">Service Issue</option>
              <option value="LabIssue">Lab Issue</option>
              <option value="EC">EC</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">
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
                <label htmlFor="status" className="form-label">
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
                <label htmlFor="adminComments" className="form-label">
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

          <button disabled={!isValid} className="btn btn-primary" type="submit">
            Update
          </button>
          <button
            onClick={() => navigate("/")}
            className="m-2 btn btn-secondary"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateTicket;
