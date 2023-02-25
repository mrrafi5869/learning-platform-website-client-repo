import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";


const Login = () => {
  const {googleSignIn, githubSignIn, signIn, theme} = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      setError("");
      console.log(user);
      navigate(from, {replace: true});
      form.reset();
    })
    .catch(error => {
      setError(error.message);
    })
  };

  const handleGoogleSignIn = () => {
      googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        setError("")
        toast.success('Successfully Login', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        navigate("/");
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const handleGithubSingIn = () => {
    githubSignIn(githubProvider)
    .then(result => {
      const user = result.user;
      setError("");
      toast.success('Successfully Login', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate("/");
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  }

  return (
      <div className={`hero min-h-screen bg-base-200`}>
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className={`card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>
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
                    className="label-text-alt link link-hover text-lg font-bold underline text-blue-600"
                  >Register</Link>
                  </>
                </label>
                <p className="text-red-500">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="text-center text-sky-400 lowercase font-serif">Login With Social Media</p>
              <div className="flex mt-4 mx-auto">
              <button onClick={handleGithubSingIn}><FaGithub className="mr-5 text-3xl text-gray-500"></FaGithub></button>
              <button onClick={handleGoogleSignIn}><FaGoogle className="mr-5 text-3xl text-blue-500"></FaGoogle></button>
            </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
