import React from "react";

const Course = ({ course }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full m-5">
      <figure className="m-3">
        <img className="rounded-lg" src={course.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-300">{course.name} Course</h2>
        <p className="text-sky-500 font-extrabold text-lg">Price: Only {course.price}</p>
        <p className="text-amber-500 font-bold">This Course will start at: {course.date}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
