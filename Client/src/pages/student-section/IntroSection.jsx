import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
function IntroSection() {
  return (
    <div className="relative bg-gradient-to-r from-green-500 to bg-green-600 dark:from-gray-700 dark:to-gray-800 py-26   px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Empower Your Skills with the Best Courses
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Explore, Learn, and Grow with Our Diverse Courses
        </p>

        <form
          action=""
          className="flex items-center bg-white dark:bg-gray-800 shadow-lg rounded-full overflow-hidden max-w-xl  mx-auto mb-6"
        >
          <Input
            type="text"
            placeholder="Search Courses"
            className="rounded-l-full  flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          ></Input>
          <Button className="bg-green-500 dark:bg-green-600 text-white px-6 py-3 rounded-r-full hover:bg-green-600 dark:hover:bg-green-800">
            Search
          </Button>
        </form>
        <Button className="bg-white dark:bg-gray-800 text-green-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
          Explore Courses
        </Button>
      </div>
    </div>
  );
}

export default IntroSection;
