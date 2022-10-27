import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className='border w-9/12 mx-auto rounded-md my-5 p-5'>
                <h1 className='text-2xl'>1. What is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            </div>
            <div className='border w-9/12 mx-auto rounded-md my-5 p-5'>
                <h1 className='text-2xl'>2. Why you are using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Trusted by +200,000 Devs. For Mobile or Web Apps. Build Extraordinary Apps.</p>
            </div>
            <div className='border w-9/12 mx-auto rounded-md my-5 p-5'>
                <h1 className='text-2xl'>3. How does the private route Work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in</p>
            </div>
            <div className='border w-9/12 mx-auto rounded-md my-5 p-5'>
                <h1 className='text-2xl'>4. What is Node?What does Node work?</h1>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.</p>
            </div>
        </div>
    );
};

export default Blog;