import React from "react";

import Course from "./Course";
import MySkeleton from "@/components/MySkelton";
function MyLearning() {
  const isLoading = false;
  const myLearningCourse = [];
  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h1 className="font-bold text-2xl">My Learning </h1>
      <div className="my-5">
        {isLoading ? (
          <MySkeleton />
        ) : myLearningCourse.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">
            Looks like you haven’t enrolled in a course yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {myLearningCourse.map((course, index) => (
              <Course key={index} course={course}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyLearning;
