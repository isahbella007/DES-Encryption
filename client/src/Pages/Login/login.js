import React, { useState } from "react";
import "./login.css";
import avatar from '../../Assets/Images/nouser.jpg'; 
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userId, setUserId] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState()
  const url = process.env.REACT_APP_BASE_URL
  let navigate = useNavigate()
  const handleLogin = async(e) => { 
    e.preventDefault()
    await axios.post(`${url}login`, { 
      userId: userId, 
      password: password
    }).then((response) => { 
      console.log(response.data)
      localStorage.setItem("name", response.data.name)
      localStorage.setItem("id", response.data.id)
      setRole(response.data.role)
    }).catch((error) => { 
      console.log(error)
    })
  }
  if(role == 'ADMIN'){ 
    navigate("/sysadmin")
  }else if(role == 'REGISTRAR'){ 
    navigate("/registrar")
  }else if(role == 'ADVISOR'){ 
    navigate("/advisor")
  }else if(role == 'STUDENT'){ 
    navigate("/student")
  }
  return (
    <div className="main">
      <div className="background-image"></div>

      <div className="container">
        <div className="login">
          <div className="circle">
            <img src={avatar} alt="Doe"></img>

            <p>Welcome</p>
          </div>
        </div>

        <div className="input-group">
          <input
            required=""
            type="text"
            name="text"
            autoComplete="off"
            className="input"
            placeholder="UserId"
            onChange={(e)=>{setUserId(e.target.value)}}
          ></input>
        </div>

        <div className="input-group2">
          <input
            required=""
            type="password"
            name="text"
            autoComplete="off"
            className="input"
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
          ></input>
        </div>

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>

      <script
        src="https://kit.fontawesome.com/b70641ac82.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};
export default Login;
