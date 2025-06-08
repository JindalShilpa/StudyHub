import React from "react";
import Course from "./Course.jsx";
import MySkeleton from "@/components/MySkelton.jsx";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi.js";

function Courses() {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError) {
    return (
      <h1>Unable to load courses at the moment. Please try again later.</h1>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10"> Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <MySkeleton key={index} />
              ))
            : data?.courses &&
              data?.courses.map((course, i) => <Course key={i} course={course} />)}
        </div>
      </div>
    </div>
  );
}

export default Courses;
