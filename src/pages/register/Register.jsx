import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();

  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const notifyDefault = () =>
    toast("Password & Confirm Password do not match!");

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      if (password === confirmPassword) {
        const res = await axios.post("/auth/register", {
          username,
          email,
          city,
          phone,
          country,
          password,
        });
        console.log(res.data);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
        navigate("/");
       
      } else {
        notifyDefault();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({ type: "REGISTER_FAIL", payload: error.response.data });
      } else {
        console.log(error)
      }
    }
  };
  return (
    <div className="register">
      <div className="lContainer">
        <h1 className="title">HotelBooking</h1>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="linput"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="linput"
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            placeholder="phone number"
            onChange={(e) => setPhone(e.target.value)}
            className="linput"
          />
        </div>
        <div className="flex">
          <div>
            <label>Country</label>
            <input
              type="text"
              placeholder="country"
              onChange={(e) => setCountry(e.target.value)}
              className="linput"
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
              className="linput"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="linput"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="linput"
            />
          </div>
        </div>
          <button onClick={handleClick} className="lbtn">
            Register
          </button>
        <ToastContainer />
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
}

export default Register;
