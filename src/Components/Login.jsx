import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container flex items-center justify-center border-red-500 bg-red-50 h-screen">
        <div className="text-center w-1/3 rounded-2xl p-3">
          <h2 className="text-4xl m-4">Welcome to devcord!</h2>
          <p className="m-3">Log in with your email and password </p>
          <form className="flex flex-col text-center justify-center items-center">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="input rounded border-2 m-2 text-center w-5/6 outline-none"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input rounded border-2 m-2 text-center w-5/6 outline-none"
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Enter your password here..."
              className="input rounded border-2 m-2 text-center w-5/6 outline-none"
            ></input>
            <button class="bg-transparent bg-blue-700 rounded hover:bg-blue-500 text-white-500 font-semibold hover:text-white py-2 px-4 w-1/2 m-4">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
