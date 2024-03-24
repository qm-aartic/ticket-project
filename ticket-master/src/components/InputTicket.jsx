import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const schema = z.object({
  title: z.string().min(5, { message: "Title must be atleast 5 characters." }),
  desc: z
    .string()
    .min(15, { message: "Description must be atleast 15 characters." }),
  fileName: z.any().optional().default(""),
  category: z.string().optional(),
  priority: z.any().optional(),
  status: z.any().optional().default("Pending"),
});

const InputTicket = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setLoggedUser(user);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const [allTickets, setAllTickets] = useState([]);

  axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ticket")
      .then((res) => setAllTickets(res.data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    const originalTickets = [...allTickets];
    const newTicket = {
      title: data.title,
      desc: data.desc,
      category: data.category,
      priority: data.priority,
      userId: loggedUser._id,
      userName: loggedUser.name,
      fileName: data?.fileName[0],
      status: data.status,
    };

    console.log("new ticket", newTicket);
    // setAllTickets([newTicket, ...allTickets])

    // axios
    //   .post("http://localhost:3000/api/ticket", newTicket)
    axios
      .post("http://localhost:3000/api/ticket", newTicket, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data: savedTicket }) =>
        setAllTickets([savedTicket, ...allTickets])
      )
      .catch((err) => {
        console.log("error caused posting ", err);
        setAllTickets(...originalTickets);
      });
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            {...register("title")}
            type="text"
            className="form-control"
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
          />
          {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="form-select"
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
          >
            <option value="default">Default</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="fileName" className="form-label">
            Evidence
          </label>
        </div>
        <div className="mb-3">
          <input
            {...register("fileName")}
            type="file"
            className="form-control-file"
          />
        </div>
        <input type="hidden" {...register("status", { value: "Pending" })} />
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
        <button onClick={() => navigate("/")} className="m-2 btn btn-secondary">
          Cancel
        </button>
      </form>
    </>
  );
};

export default InputTicket;
