import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import JobCat from './Components/JobCat/JobCat';
import JobDetails from './Components/JobDetails/JobDetails';
import Statistics from './Components/JobDetails/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/', element:<Home></Home>,
      },
      {
        path:'/details/:detailsId', element:<JobDetails></JobDetails>,
        loader: () => fetch('/jobinfo.json'),
      },
      {
        path: '/statistics', element: <Statistics></Statistics>
      },
      {
        path:'/applied', element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobinfo.json')
      },
      {
        path:'/blog', element:<Blog></Blog>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
