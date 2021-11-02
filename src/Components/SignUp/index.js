import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserState } from "../../Reducers/userReducers";
const EmailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[]\.,;:\s@"]+\.)+[^<>()[]\.,;:\s@"]{2,})$/i;
function SignUp() {
  const [warning, setWarning] = useState("");
  const Dispatch = useDispatch();
  const submitLoginForm = (e) => {
    e.preventDefault();
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;
    const email = document.getElementById("email")?.value;
    if (username && password && email) {
      if (EmailRegex.test(email)) {
        if (password.length < 8) {
          setWarning("Password Must Be Of 8 Characters");
          return;
        }
        axios
          .post(`http://localhost:4000/signup`, {
            password: password,
            email: email,
            username: username,
          })
          .then((res) => {
            console.log(res.data);
            console.log({
              username: res.data.username,
              photoUrl: res.data.imageUrl,
              email: res.data.email,
              userId: res.data._id,
            });
            Dispatch(
              updateUserState({
                username: res.data.username,
                photoUrl: res.data.imageUrl,
                email: res.data.email,
                userId: res.data._id,
              })
            );
          })
          .catch((err) => {
            setWarning(err.response ? err.response.data.message : err.message);
          });
      } else {
        setWarning("Please Enter A Valid Email Address");
      }
    } else {
      return;
    }
  };
  return (
    <>
      <div className="signup-div flex items-center justify-center border-red-500 bg-red-50 h-screen w-screen">
        <div className="text-center w-1/3 shadow-2xl rounded-2xl p-3">
          <h2 className="text-4xl m-4">Welcome to Devcord!</h2>
          <p className="m-3">Sign up to get started !</p>
          <span className="text-red-600">{warning}</span>
          <form
            onSubmit={submitLoginForm}
            className="flex flex-col text-center justify-center items-center"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              className="input rounded-lg border-2 m-2 text-center w-5/6 outline-none"
              id="username"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input rounded-lg border-2 m-2 text-center w-5/6 outline-none"
              id="email"
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Enter your password here..."
              className="input rounded-lg border-2 m-2 text-center w-5/6 outline-none"
              id="password"
            ></input>
            <button
              onClick={submitLoginForm}
              className="bg-transparent bg-blue-700 rounded-2xl hover:bg-blue-500 text-white-500 font-semibold hover:text-white py-2 px-4 w-1/2 m-4"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
