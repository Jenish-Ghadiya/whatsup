import React, { useState } from "react";
import "../form.scss";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handlesubmite = () => {
        const users= JSON.parse(localStorage.getItem("users"))
        const findUser = users.find(
            (u) => u.email === user.email && u.password === user.password
        )
        if (findUser) {
            localStorage.setItem("issignUp" , "true")
            localStorage.setItem("IsLogin" , "true")
            toast.success("redy chhe")
            window.location.reload()
        }else{
            toast.error("redy chhe pan khotu che")
        }
    }

    return (
        <div className="form-bg">
            <div className="container">
                <div className="form">
                    <div className="heading">
                        <span>Infinity</span>
                    </div>
                    <div className="login">
                        <h1>Login</h1>
                            <div className="form-control">
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    onChange={handleChange}
                                />
                                <label>Email</label>
                            </div>
                            <div className="form-control">
                                <input
                                    type="password"
                                    required
                                    name="password"
                                    onChange={handleChange}
                                />
                                <label>Password</label>
                            </div>
                            <button type="submit" className="btn" onClick={handlesubmite}>
                                Login
                            </button>
                        <p className="text">
                            Don't have an account? <Link to={"/"}>Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
