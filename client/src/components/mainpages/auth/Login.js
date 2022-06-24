// import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import axios from "axios";
// import Header from "../../headers/Header";
// import Rpolicy from "./Rpolicy";

// function Login() {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const onChangeInput = (e) => {
//     const {name, value} = e.target;
//     setUser({...user, [name]: value});
//   };

//   const loginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/user/login", {...user});

//       localStorage.setItem("firstLogin", true);

//       window.location.href = "/";
//     } catch (err) {
//       alert(err.response.data.msg);
//     }
//   };

//   return (
//     <div> <Header/>
//     <div className="login-page">
//       <form onSubmit={loginSubmit}>
//         <h2>Login</h2>
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
//           <button type="submit">Login</button>
//           <Link to="/register">Sign Up</Link>
//         </div>
//       </form>
//       <div className="png-icons">
//         <img className="pngs" src="./pics/dtruck.png" alt="delivery sevices available" />
//         <img className="pngs" src="./pics/delivery.png" alt="delivery sevices available" />
//         <img className="pngs" src="./pics/star.png" alt="delivery sevices available" />
//       </div>
//         <img className="flag" src="./pics/ghflag.png" alt="ghana flag" />
//         <div><p>Services only in Ghana for now.</p></div>
//       </div>
//       <Rpolicy/>
//       </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './login.css';
import Header from "../../headers/Header";
import Rpolicy from "./Rpolicy";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });

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
        <form onSubmit={loginSubmit}>
          <h2>Login</h2>
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
            <button type="submit">Login</button>
            <div>Don`t have an account ?</div>
            <Link to="/register">
              <div> Sign Up</div>
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
        {/* <img
          className="flag"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScq101OztHcnFnlXO-lorDwpkpwcncnwP9uQ&usqp=CAU"
          alt="ghana flag"
        /> */}
        {/* bouncing text */}
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
      </div>
    </div>
  );
}

export default Login;

