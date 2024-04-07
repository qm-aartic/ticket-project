import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


const ViewUser = () => {
    const [loggedUser, setLoggedUser] = useState("");
    const [user, setUser] = useState({name: "", role: "", email: ""});
    const [isUpdating, setIsUpdating] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const handleUpdate = () => {
        if (!isUpdating) {
            const originalUser = { ...user };
            const { password, _id, __v, ...updatedUser } = originalUser;
            //updatedUser.role = updatedUser.role.toLowerCase();
            console.log(updatedUser);
            axios
            .put(`http://localhost:3000/api/users/${params.id}`, updatedUser)
            .catch((err) => setUser(originalUser));
        }
    }

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
    
    useEffect(() => {
        axios.get(`http://localhost:3000/api/users/${params.id}`)
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [loggedUser])

    return (
        <div>
            <div className="min-h-[80vh] hero bg-base-200 px-96">
                <div className="card bg-base-100 p-10 min-w-full flex flex-col gap-8">   
                    <h2 className="card-title text-primary"> User Details </h2>
                    <form onSubmit = {handleSubmit(handleUpdate)} className='flex flex-col gap-4'>
                        <div className="mb-3">
                            <label htmlFor="name" className="card-title font-light text-primary"> Name </label>
                            <input
                            id="name"
                            type="text"
                            className="form-control disabled:bg-[#EFEFEF] disabled:opacity-75 min-w-full"
                            value = {user.name}
                            onChange = {(e) => setUser({...user, name: e.target.value})}
                            disabled = {!isUpdating}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="card-title font-light text-primary"> Email </label>
                            <input
                            id="email"
                            type="text"
                            className="form-control disabled:bg-[#EFEFEF] disabled:opacity-75 min-w-full"
                            value = {user.email}
                            onChange = {(e) => {setUser({...user, email: e.target.value})}}
                            disabled = {!isUpdating}
                            />
                        </div>
                        <div className = "flex flex-row justify-between items-center">
                            <button type = "submit" className="btn btn-primary text-white" onClick={() => setIsUpdating(update => !update)}> 
                            {isUpdating ? <p className='flex gap-4 items-center'>Update <FaCheck size={18} /></p> : <p className='flex gap-10 items-center'>Edit <FaRegEdit size={18} /></p> }
                             </button>
                            <button className="btn btn-black btn-outline" onClick={() => navigate("/")}> Back </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;