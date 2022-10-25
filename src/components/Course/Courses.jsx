import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course')
        .then(res => res.json())
        .then(data => setCourses(data));
    } , [])
    return (
        <div>
            {
                courses.map(course => <Course
                    key={course.id}
                    course = {course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;