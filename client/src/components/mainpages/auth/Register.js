// import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import axios from "axios";
// import Header from "../../headers/Header";
// import Rpolicy from "./Rpolicy";

// function Register() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onChangeInput = (e) => {
//     const {name, value} = e.target;
//     setUser({...user, [name]: value});
//   };

//   const registerSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/user/register", {...user});

//       localStorage.setItem("firstLogin", true);

//       window.location.href = "/";
//     } catch (err) {
//       alert(err.response.data.msg);
//     }
//   };

//   return (
//     <div> <Header/>
//     <div className="login-page">
//       <form onSubmit={registerSubmit}>
//         <h2>Sign Up</h2>
//         <input
//           type="text"
//           name="name"
//           required
//           placeholder="Name/phone number"
//           value={user.name}
//           onChange={onChangeInput}
//         />

//         <input
//           type="email"
//           name="email"
//           required
//           placeholder="Email"
//           value={user.email}
//           onChange={onChangeInput}
//         />

//         <input
//           type="password"
//           name="password"
//           required
//           autoComplete="on"
//           placeholder="Password"
//           value={user.password}
//           onChange={onChangeInput}
//         />

//         <div className="row">
//           <button type="submit">Sign-Up</button>
//           <Link to="/login">Login</Link>
//         </div>
//       </form>
//       <div className="png-icons">
//         <img className="pngs" src="./pics/dtruck.png" alt="delivery services available" />
//         <img className="pngs" src="./pics/delivery.png" alt="delivery services available" />
//         <img className="pngs" src="./pics/star.png" alt="delivery services available" />
//       </div>
//         <img className="flag" src="./pics/ghflag.png" alt="ghana flag" />
//         <div><p>Services only in Ghana for now.</p></div>
//       </div>
//       <Rpolicy/>
//       </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Header from "../../headers/Header"; 
import Rpolicy from "./Rpolicy";

function Register() { 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div>
      {" "}
      <Header />
      <div className="login-page">
        <form onSubmit={registerSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
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

          <div className="l-row">
            <button type="submit">Sign-Up</button>
            <div>Already having an account ?</div>
            <Link to="/login">
              <div>Login</div>
            </Link>
          </div>
        </form>
        <div className="png-icons">
          <img
            className="pngs"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLW9ii6XC3v7PdqCO2kZS6qjAlBf_wN2MIw&usqp=CAU"
            alt="delivery sevices available now"
          />
          <img
            className="pngs"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuxjjSm4jyfLZfPE0XtHUVa9F5bByGPVI4Q&usqp=CAU"
            alt="delivery sevices available"
          />

          <img
            className="pngs"
            src="https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif"
            alt="delivery sevices available"
          />
        </div>
        <div>
          <h1>
            <span>
              <img
                className="flag"
                src="https://i.pinimg.com/originals/14/bd/f7/14bdf7aa1794bc0a9965bbff73deefe2.gif"
                alt="ghana flag"
              />
            </span>
            <div class="message">
              <div class="word1">QUALITY</div>
              <div class="word2">LONG</div>
              <div class="word3">LASTING</div>
              <div class="word4">BATTERIES</div>
            </div>
          </h1>
        </div>
        {/* <img
          className="flag"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScq101OztHcnFnlXO-lorDwpkpwcncnwP9uQ&usqp=CAU"
          alt="ghana flag"
        /> */}
      </div>
      <Rpolicy />
    </div>
  );
}

export default Register;

