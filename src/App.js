import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';

import Root from "./Root";
import Modules from "./Pages/Modules/Modules";
import Lesson from "./Pages/Lesson/Lesson";
import Assignment from "./Pages/Assignment/Assignment";
import Quiz from "./Pages/Quiz/Quiz";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/modules",
        element: <Modules/>,
        children:[
          {
            path:'/modules/lesson',
            element: <Lesson/>
          },
          {
            path:'/modules/quiz',
            element:<Quiz/>
          },
          {
            path:'/modules/assignment',
            element:<Assignment/>
          }
        ]
      },
    ],
  },
]);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
