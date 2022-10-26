import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4999/course')
        .then(res => res.json())
        .then(data => setCourses(data));
    } , [])
    return (
        <div className='flex align-middle my-12'>
            <div>
                {
                    courses.map(course => <Link
                        key={course.id}
                        className = "bg-black text-white my-3 p-5 w-64 rounded-md font-semibold text-center ml-7 block"
                        to={`/course/${course.id}`}
                    >{course.name}</Link>)
                }
            </div>
            <div className='w-3/4 mx-auto grid grid-cols-3'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course = {course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;