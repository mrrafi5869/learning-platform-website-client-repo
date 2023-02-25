import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const {loading, theme} = useContext(AuthContext);
  
  useEffect(() => {
    fetch("https://learning-platform-website-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  if(loading){
    return <div className="flex justify-center items-center my-36">
      <button className="btn btn-square loading"></button>
    </div>
  }
  return (
    <div className="lg:flex justify-center align-middle my-12">
      <div>
        {courses.map((course) => (
          <Link
            key={course.id}
            className={`${theme === "light" ? "bg-black text-white" : 'bg-white text-black'} my-3 p-5 w-64 rounded-md font-semibold text-center ml-7 block`}
            to={`/course/${course.id}`}
          >
            {course.name}
          </Link>
        ))}
      </div>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
