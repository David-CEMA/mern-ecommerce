import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", {...user});

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name/phone number"
          value={user.name}
          onChange={onChangeInput}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
      <div className="png-icons">
        <img className="pngs" src="./pics/dtruck.png" alt="delivery image" />
        <img className="pngs" src="./pics/delivery.png" alt="delivery image" />
        <img className="pngs" src="./pics/star.png" alt="delivery image" />
      </div>
      <img className="flag" src="./pics/ghflag.png" alt="ghana flag" />
    </div>
  );
}

export default Register;
