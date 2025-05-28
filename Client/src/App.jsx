import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import IntroSection from "./pages/student-section/IntroSection";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router";
import Courses from "./pages/student-section/Courses";
import MyLearning from "./pages/student-section/MyLearning";
import Profile from "./pages/student-section/Profile";
import Sidebar from "./pages/admin_section/Sidebar";
import Dashboard from "./pages/admin_section/Dashboard";
import CourseTable from "./pages/admin_section/course/CourseTable";
import AddCourse from "./pages/admin_section/course/AddCourse";
import EditCourse from "./pages/admin_section/course/EditCourse";
import CreateLecture from "./pages/admin_section/lecture/CreateLecture";
import EditLecture from "./pages/admin_section/lecture/EditLecture";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <IntroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },

      //admin routes start from here
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
          {
            path: "course/:courseId/lecture",
            element: <CreateLecture />,
          },
          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
