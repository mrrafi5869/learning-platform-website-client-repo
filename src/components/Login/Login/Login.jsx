import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <div className="flex space-x-56">
              <button className="btn btn-outline"><FaGithub className="mr-2 text-lg text-gray-500"></FaGithub> Github</button>
              <button className="btn btn-outline btn-primary"><FaGoogle className="mr-2 text-lg text-blue-500"></FaGoogle>Google</button>
            </div>
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <>
                  Don't have an Account?Please
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover text-lg"
                  >Register</Link>
                  </>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
