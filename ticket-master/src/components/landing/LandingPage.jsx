import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
    email: z.string().min(5),
    password: z.string().min(5),
});

function LandingPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = async (data) => {
        const user = { ...data };

        const { data: jwt } = await axios
            .post("http://localhost:3000/api/auth", user)
            .catch((err) => {
                console.log(err.response.data);
            });

        localStorage.setItem("token", jwt);
        // navigate("/");
        window.location = "/";
    };

    return (
        <div className="hero h-[80vh] bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="text-center lg:text-left flex flex-col">
                    <h1 className="text-5xl font-bold">You aren't signed in.</h1>
                    <p className="py-6">Please login to your University Account to continue to the Issues and Feedback System.</p>
                    <div className="divider"></div>
                    <p className="py-6 ">Don't have an account?  <a className="link link-accent link-hover">Sign Up.</a></p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" id="email" className="input input-bordered" required {...register("email")} />
                            {errors.email && (
                                <p className="text-danger">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input id="password" type="password" placeholder="Password" className="input input-bordered" required  {...register("password")} />
                            {errors.password && (
                                <p className="text-danger">{errors.password.message}</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={!isValid} className="btn btn-primary text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LandingPage