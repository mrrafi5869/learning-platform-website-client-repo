import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import jsPDF from 'jspdf'
import { toast } from "react-toastify";
import { FaBackspace, FaBackward, FaUndo } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();
  const {id, img, name, sell, lesson} = course;

  const pdfGenerate = () => {
    let doc = new jsPDF('landscape', "px", "a4", 'false');
    doc.addImage(img, 'PNG', 65, 20, 500, 400);
    doc.addPage();
    doc.setFont('Helvertica', "bold");
    doc.text(60, 60, "Name: ");
    doc.text(60, 80, "sold: ");
    doc.text(60, 100, "Lesson: ");
    doc.setFont('Helvertica', "normal");
    doc.text(100, 60, name);
    doc.text(100, 80, sell);
    doc.text(120, 100, lesson);
    doc.save(`${name}.pdf`);
    toast.success('Downloading...', {
      position: "top-center",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-auto my-60">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Total sell: {sell}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{lesson}</div>
          <button className="badge badge-outline hover:bg-gray-400" onClick={pdfGenerate}>Download</button>
          <Link to = '/course' className="badge badge-outline bg-gray-500 text-white"><FaBackward className="mr-1"></FaBackward> Back</Link>
        </div>
        <Link to={`/premiumCourse/${id}`} className="btn">Premium Course</Link>
      </div>
    </div>
  );
};

export default CourseDetails;
