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
    navigate("/ticket-updated");
  };

  const archiveTicket = () => {
    const originalTicket = { ...ticket };
    const { fileName, date, _id, __v, ...updatedTicket } = originalTicket;
    updatedTicket.status = "Archived";
    axios
      .put(`http://localhost:3000/api/ticket/${params.id}`, updatedTicket)
      .catch((err) => setTicket(originalTicket));
    navigate("/archive");
  };

  const openTicket = () => { 
    const originalTicket = { ...ticket };
    const { fileName, date, _id, __v, ...updatedTicket } = originalTicket;
    updatedTicket.status = "Pending";
    axios
      .put(`http://localhost:3000/api/ticket/${params.id}`, updatedTicket)
      .catch((err) => setTicket(originalTicket));
    navigate("/tickets");
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
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

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
            disabled={!isValid}
            className="btn btn-primary"
            type="submit"
          >
            Update
          </button>
          {ticket.status === "Archived" && (
            <button
              onClick={() => openTicket()}
              className="btn btn-success"
            >
              Reopen
            </button>
          )}
          {ticket.status !== "Archived" && (
            <button
              onClick={() => archiveTicket()}
              className="btn btn-warning"
            >
              Archive
            </button>
          )}
          <button
            onClick={() => navigate("/")}
            className="m-2 btn btn-secondary self-end"
          >
            Cancel
          </button>
          
        </form>
      </div>
    </div>
    </>
  );
};

export default UpdateTicket;



