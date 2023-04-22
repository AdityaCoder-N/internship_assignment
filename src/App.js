import React from "react";

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
import Instructors from "./Pages/Instructors/Instructors";


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
      {
        path: "/instructors",
        element: <Instructors/>,
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
