import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

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
            <div className="min-h-[88vh] bg-gray-100 flex flex-col justify-center items-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative w-full max-w-4xl">   
                    <form onSubmit = {handleSubmit(handleUpdate)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="card-title font-light text-primary"> Name </label>
                            <input
                            id="name"
                            type="text"
                            className="form-control disabled:bg-[#EFEFEF] disabled:opacity-75"
                            value = {user.name}
                            onChange = {(e) => setUser({...user, name: e.target.value})}
                            disabled = {!isUpdating}
                            />
                        </div>
                        {/* Role can't be changed
                        <div className="mb-3">
                            <label htmlFor="role" className="card-title font-light text-primary"> Role </label>
                            <select
                            id="role"
                            className="form-select disabled:bg-[#EFEFEF] disabled:opacity-75"
                            value={user.role}
                            onChange={(e) =>
                                setUser({ ...user, role: e.target.value })
                            }
                            disabled = {!isUpdating}
                            >
                                <option value="Student"> Student </option>
                                <option value="Staff"> Staff </option>
                                <option value="Admin"> Admin </option>
                            </select>
                        </div>
                        */}
                        <div className="mb-3">
                            <label htmlFor="email" className="card-title font-light text-primary"> Email </label>
                            <input
                            id="email"
                            type="text"
                            className="form-control disabled:bg-[#EFEFEF] disabled:opacity-75"
                            value = {user.email}
                            onChange = {(e) => {setUser({...user, email: e.target.value})}}
                            disabled = {!isUpdating}
                            />
                        </div>
                        <div className = "flex flex-row justify-between items-center">
                            <button type = "submit" className="btn btn-primary" onClick={() => setIsUpdating(update => !update)}> {isUpdating ? "Update" : "Change"} </button>
                            <button className="m-2 btn btn-secondary" onClick={() => navigate("/users")}> Back </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;