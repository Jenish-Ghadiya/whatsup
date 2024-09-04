import React, { useState } from 'react'
import "../form.scss"
import { Link } from 'react-router-dom'
export default function SignUp() {
    const [user, setUser] = useState({fullname:" " ,email:"",password:""})

    const handleChange = (e) => {
        const {name ,value} = e.target
        setUser({...user,[name] : value})
    }
    
    const handelSubmit = () => {
        if(
            user.fullname.trim() !== "" &&
            user.email.trim() !== "" &&
            user.password.trim() !== "" 
        ){  
            const existingUsers = JSON.parse(localStorage.getItem("users")) || []
            // console.log(existingUsers)   
            existingUsers.push(user)
            localStorage.setItem("users" ,JSON.stringify(existingUsers))
            localStorage.setItem("issignUp" , "true")
            window.location.reload()
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
            <h1>Sign Up</h1>
              <div className="form-control">
                <input
                  type="text"
                  required
                  name="fullname"
                //   value={user.fullname}
                  onChange={handleChange}
                />
                <label>Full Name</label>
              </div>
              <div className="form-control">
                <input
                  type="email"
                  required
                  name="email"
                //   value={user.email}
                  onChange={handleChange}
                />
                <label>Email</label>
              </div>
              <div className="form-control">
                <input
                  type="password"
                  required
                  name="password"
                //   value={user.password}
                  onChange={handleChange}
                />
                <label>Password</label>
              </div>
              <button type="submit" className="btn" onClick={handelSubmit}>
                Sign Up
              </button>
            <p className="text">
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
