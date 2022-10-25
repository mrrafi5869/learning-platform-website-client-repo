import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
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
        }
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
