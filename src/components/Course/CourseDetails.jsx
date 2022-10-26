import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const {img, name, sell, lesson} = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-60">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{sell}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{lesson}</div>
          <button className="badge badge-outline">Download</button>
          <Link to = '/course'className="badge badge-outline bg-gray-500 text-white">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
