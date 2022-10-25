import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Course/Courses';
import FAQ from './components/FAQ/FAQ';
import Main from './components/Layout/Main';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/course",
          element: <Courses></Courses>
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
      ]
    }
  ])


  return (
        <div>
          <RouterProvider router={router}></RouterProvider>
        </div>
  );
}

export default App;
