import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import CourseDetails from "./components/Course/CourseDetails";
import Courses from "./components/Course/Courses";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import FAQ from "./components/FAQ/FAQ";
import Main from "./components/Layout/Main";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import PremiumCourse from "./components/PremiumCourse/PremiumCourse";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/course",
          element: <Courses></Courses>,
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/course/:id",
          loader: ({ params }) =>
            fetch(
              `https://learning-platform-website-server.vercel.app/course/${params.id}`
            ),
          element: <CourseDetails></CourseDetails>,
        },
        {
          path: "/premiumCourse/:id",
          loader: ({ params }) =>
            fetch(
              `https://learning-platform-website-server.vercel.app/premiumCourse/${params.id}`
            ),
          element: (
            <PrivateRoute>
              <PremiumCourse></PremiumCourse>
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
