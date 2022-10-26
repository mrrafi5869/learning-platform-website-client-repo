import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {id, name, price, date, img} = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full m-5">
      <figure className="m-3">
        <img className="rounded-lg" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-300">{name} Course</h2>
        <p className="text-sky-500 font-extrabold text-lg">Price: Only {price}</p>
        <p className="text-amber-500 font-bold">This Course will start at: {date}</p>
        <div className="card-actions justify-end">
          <Link to={`/course/${id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
